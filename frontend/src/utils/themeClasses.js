// Theme-aware class utilities
export const getThemeClasses = (isDark) => ({
  // Backgrounds
  bgPrimary: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
  bgSecondary: isDark ? 'bg-[#0f0f0f]' : 'bg-gray-50',
  bgGradient: isDark ? 'bg-gradient-to-b from-blue-950/10' : 'bg-gradient-to-b from-blue-50/50',
  
  // Text colors
  textPrimary: isDark ? 'text-white' : 'text-black',
  textSecondary: isDark ? 'text-gray-300' : 'text-gray-700',
  textTertiary: isDark ? 'text-gray-400' : 'text-gray-600',
  textAccent: isDark ? 'text-blue-400' : 'text-blue-600',
  
  // Borders
  border: isDark ? 'border-gray-800' : 'border-gray-200',
  borderHover: isDark ? 'hover:border-blue-500/50' : 'hover:border-blue-400',
  
  // Cards
  cardBg: isDark ? 'bg-[#0f0f0f]' : 'bg-white',
  cardBorder: isDark ? 'border-gray-800' : 'border-gray-200',
  
  // Badges
  badgeBg: isDark ? 'bg-blue-950/30' : 'bg-blue-50',
  badgeBorder: isDark ? 'border-blue-500/20' : 'border-blue-200',
  badgeText: isDark ? 'text-blue-300' : 'text-blue-700',
  badgeIcon: isDark ? 'text-blue-400' : 'text-blue-600',
  
  // Inputs
  inputBg: isDark ? 'bg-[#0f0f0f]' : 'bg-white',
  inputBorder: isDark ? 'border-gray-800' : 'border-gray-300',
  inputText: isDark ? 'text-white' : 'text-black',
  inputLabel: isDark ? 'text-gray-300' : 'text-gray-700',
  
  // Hover states
  hoverCard: isDark ? 'hover:bg-blue-950/50' : 'hover:bg-blue-50',
  
  // Gradient overlays
  gradientBlur: isDark ? 'bg-blue-600/5' : 'bg-blue-100/30',
  
  // Shadow
  shadow: isDark ? '' : 'shadow-sm',
});
