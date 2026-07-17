/**
 * Vercel build wrapper: CRA often leaves event-loop handles open after a
 * successful compile (then CLI 56 hits an xclip/xsel retry loop and never
 * finishes). Once build/index.html exists, allow a short grace period, kill
 * react-scripts if still alive, run prerender, and exit cleanly.
 */
const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const indexHtml = path.join(root, 'build', 'index.html');
const reactScripts = path.join(root, 'node_modules', '.bin', 'react-scripts');
const prerender = path.join(__dirname, 'prerenderLmEmailskill.cjs');

const GRACE_MS_AFTER_OUTPUT = 8000;
const HARD_TIMEOUT_MS = 180000;

function forceKill(child) {
  if (!child || child.killed || child.exitCode !== null) return;
  try {
    child.kill('SIGTERM');
  } catch (_) {
    /* ignore */
  }
  setTimeout(() => {
    if (child.exitCode === null) {
      try {
        child.kill('SIGKILL');
      } catch (_) {
        /* ignore */
      }
    }
  }, 2000);
}

function finish(code) {
  const result = spawnSync(process.execPath, [prerender], {
    cwd: root,
    stdio: 'inherit',
  });
  const prerenderCode = result.status == null ? 1 : result.status;
  process.exit(code !== 0 && code !== null ? code : prerenderCode);
}

if (!fs.existsSync(reactScripts)) {
  console.error('vercel-build: react-scripts not found at', reactScripts);
  process.exit(1);
}

const child = spawn(reactScripts, ['build'], {
  cwd: root,
  stdio: 'inherit',
  env: {
    ...process.env,
    CI: 'true',
    DISABLE_ESLINT_PLUGIN: 'true',
    GENERATE_SOURCEMAP: process.env.GENERATE_SOURCEMAP || 'false',
  },
});

let settled = false;
let graceTimer = null;

const hardTimer = setTimeout(() => {
  if (settled) return;
  console.error('vercel-build: hard timeout; killing react-scripts');
  forceKill(child);
}, HARD_TIMEOUT_MS);

const poll = setInterval(() => {
  if (settled || graceTimer || !fs.existsSync(indexHtml)) return;
  console.log(
    `vercel-build: build output detected; allowing ${GRACE_MS_AFTER_OUTPUT}ms for clean exit`
  );
  graceTimer = setTimeout(() => {
    if (settled) return;
    console.log('vercel-build: react-scripts still running; forcing exit');
    forceKill(child);
  }, GRACE_MS_AFTER_OUTPUT);
}, 500);

child.on('error', (err) => {
  console.error('vercel-build: failed to start react-scripts', err);
  settled = true;
  clearInterval(poll);
  clearTimeout(hardTimer);
  if (graceTimer) clearTimeout(graceTimer);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (settled) return;
  settled = true;
  clearInterval(poll);
  clearTimeout(hardTimer);
  if (graceTimer) clearTimeout(graceTimer);

  if (!fs.existsSync(indexHtml)) {
    console.error(
      `vercel-build: react-scripts exited (${signal || code}) without build/index.html`
    );
    process.exit(code || 1);
  }

  if (signal) {
    console.log(`vercel-build: react-scripts stopped via ${signal}; continuing`);
  }

  finish(0);
});
