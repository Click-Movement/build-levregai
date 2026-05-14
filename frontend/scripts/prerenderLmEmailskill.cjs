/**
 * Post-build: write build/lm/emailskill/index.html = root index.html + OG/Twitter meta in <head>.
 * Facebook and other crawlers often do not execute JS; they need og:image in the first HTML response.
 * Keep meta values in sync with frontend/src/pages/lm/EmailSkill.jsx (OG_* constants).
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('prerenderLmEmailskill: build/index.html not found. Run react-scripts build first.');
  process.exit(1);
}

const base = fs.readFileSync(indexPath, 'utf8');

const ogHead = `
<link rel="canonical" href="https://www.levreg.ai/lm/emailskill"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.levreg.ai/lm/emailskill"/>
<meta property="og:image" content="https://www.levreg.ai/og/lm-emailskill.jpg"/>
<meta property="og:image:secure_url" content="https://www.levreg.ai/og/lm-emailskill.jpg"/>
<meta property="og:title" content="Email System Claude Skill | LevReg.Ai"/>
<meta property="og:description" content="21 years in marketing with millions sold using email. Get the Claude skill built from that system."/>
<meta property="og:site_name" content="LevReg.Ai"/>
<meta property="og:image:width" content="1126"/>
<meta property="og:image:height" content="242"/>
<meta property="og:image:alt" content="LevReg.Ai — Email system as a Claude skill"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@levregai"/>
<meta name="twitter:title" content="Email System Claude Skill | LevReg.Ai"/>
<meta name="twitter:description" content="21 years in marketing with millions sold using email. Get the Claude skill built from that system."/>
<meta name="twitter:image" content="https://www.levreg.ai/og/lm-emailskill.jpg"/>
`;

if (!base.includes('<head>')) {
  console.error('prerenderLmEmailskill: unexpected index.html (no <head>).');
  process.exit(1);
}

const injected = base.replace('<head>', `<head>${ogHead}`);
const outDir = path.join(buildDir, 'lm', 'emailskill');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'index.html');
fs.writeFileSync(outFile, injected);
console.log('prerenderLmEmailskill: wrote', outFile);
