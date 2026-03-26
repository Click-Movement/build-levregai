# LevReg.AI — Light Mode Palette Design Notes

## Design Principles
- Primary green #14B870 must remain unchanged — it is the brand anchor
- Backgrounds shift to crisp whites and cool light grays
- Text inverts to near-black and medium gray
- Accent blue #0EA5E9 darkens slightly for better contrast on white
- Semantic colors remain identical (success/warning/error are universal)
- Borders lighten to subtle cool grays
- The overall feel: clean, professional, regulatory-grade — not "soft" or pastel

## Light Mode Tokens

Primary green (unchanged):    #14B870
Background (page/site):        #F9FAFB  (off-white, same as dark mode text-primary — elegant inversion)
Background (app shell):        #FFFFFF  (pure white for app surfaces)
Surfaces/cards:                #F3F4F6  (light cool gray)
Surface elevated:              #FFFFFF  (white cards on gray bg)
Primary text on light:         #0D1117  (near-black, warmer than pure black)
Secondary text:                #4B5563  (medium cool gray)
Accent (links, charts):        #0284C7  (deeper cyan-blue for AA contrast on white)
Borders/dividers:              #E5E7EB  (light gray)
Success:                       #16A34A  (darker green for contrast on white)
Warning:                       #D97706  (darker amber for contrast on white)
Error:                         #DC2626  (darker red for contrast on white)

## Logo on Light Mode
- Wordmark letters: #0D1117 (near-black)
- ".AI" suffix / accent: #14B870 (brand green, unchanged)
- On white card: same
- Reversed (green bg): #FFFFFF or #F9FAFB for letters

## Key Contrast Checks (light mode)
- #0D1117 on #F9FAFB → ~18:1 AAA ✓
- #14B870 on #FFFFFF → 2.8:1 (use only for large text/icons, not body text)
- #0284C7 on #FFFFFF → 4.6:1 AA ✓ (links)
- #4B5563 on #F9FAFB → 7.1:1 AA ✓ (secondary text)
- #0D1117 on #14B870 → 8.4:1 AAA ✓ (button labels on green)
