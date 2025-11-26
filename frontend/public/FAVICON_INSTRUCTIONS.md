# Favicon Generation Instructions

## Required Files

You need to create the following favicon files and place them in the `/frontend/public/` directory:

1. **favicon.ico** - 48x48px (classic favicon)
2. **favicon-16x16.png** - 16x16px (small browser tab)
3. **favicon-32x32.png** - 32x32px (standard browser tab)
4. **apple-touch-icon.png** - 180x180px (iOS home screen)

## Quick Method: Use Favicon Generator

### Option 1: RealFaviconGenerator (Recommended)
1. Visit https://realfavicongenerator.net/
2. Upload your LevReg.Ai logo (preferably the blue version)
3. Customize if needed (keep default settings work well)
4. Generate and download the package
5. Extract the files to `/frontend/public/`

### Option 2: Favicon.io
1. Visit https://favicon.io/favicon-converter/
2. Upload your logo image
3. Download the generated files
4. Place them in `/frontend/public/`

## Logo Source

Your current logo URLs:
- Light mode (black/blue): https://customer-assets.emergentagent.com/job_levreg-marketing/artifacts/rcnyj81p_LevRegBlackBlue_Logo.png
- Dark mode (white/blue): https://customer-assets.emergentagent.com/job_7e29061e-ffd5-4596-a601-775e365ccb93/artifacts/eiumndvy_LevRegWhiteBlue_Logo.png

**Recommendation:** Use the blue/white version for better visibility across different backgrounds.

## Manual Creation (Advanced)

If you have design software (Photoshop, Illustrator, Figma):

1. **favicon.ico (48x48px)**
   - Create a square canvas 48x48px
   - Center your logo/icon
   - Export as .ico format

2. **favicon-16x16.png (16x16px)**
   - Create 16x16px canvas
   - Simplify logo for tiny size
   - Export as PNG

3. **favicon-32x32.png (32x32px)**
   - Create 32x32px canvas
   - Use simplified logo
   - Export as PNG

4. **apple-touch-icon.png (180x180px)**
   - Create 180x180px canvas
   - Add padding (about 10% on each side)
   - Export as PNG

## Verification

After adding the files:
1. Clear browser cache
2. Visit your site
3. Check the browser tab for the favicon
4. Test on mobile devices

## Note

The `index.html` file has already been updated with the necessary favicon links. You just need to add the actual image files.

Once complete, delete this instruction file.

