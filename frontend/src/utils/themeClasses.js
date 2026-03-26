export const getThemeClasses = (isDark = true) => {
  if (isDark) {
    return {
      // Backgrounds
      bgPrimary: 'bg-[#0a0a0a]',
      bgSecondary: 'bg-[#0f0f0f]',
      bgGradient: 'bg-gradient-to-b from-brand-950/10',

      // Text colors
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      textTertiary: 'text-gray-400',
      textAccent: 'text-brand-400',

      // Borders
      border: 'border-gray-800',
      borderHover: 'hover:border-brand-500/50',

      // Cards
      cardBg: 'bg-[#0f0f0f]',
      cardBorder: 'border-gray-800',

      // Badges
      badgeBg: 'bg-brand-950/30',
      badgeBorder: 'border-brand-500/20',
      badgeText: 'text-brand-300',
      badgeIcon: 'text-brand-400',

      // Inputs
      inputBg: 'bg-[#0f0f0f]',
      inputBorder: 'border-gray-800',
      inputText: 'text-white',
      inputLabel: 'text-gray-300',

      // Hover states
      hoverCard: 'hover:bg-brand-950/50',

      // Gradient overlays
      gradientBlur: 'bg-brand/5',

      // Shadow
      shadow: '',
    };
  }

  // Light mode
  return {
    // Backgrounds
    bgPrimary: 'bg-[#F9FAFB]',
    bgSecondary: 'bg-white',
    bgGradient: 'bg-gradient-to-b from-brand-50/30',

    // Text colors
    textPrimary: 'text-[#0D1117]',
    textSecondary: 'text-gray-600',
    textTertiary: 'text-gray-500',
    textAccent: 'text-brand-600',

    // Borders
    border: 'border-gray-200',
    borderHover: 'hover:border-brand-400/50',

    // Cards
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200',

    // Badges
    badgeBg: 'bg-brand-50',
    badgeBorder: 'border-brand-200',
    badgeText: 'text-brand-700',
    badgeIcon: 'text-brand-600',

    // Inputs
    inputBg: 'bg-white',
    inputBorder: 'border-gray-300',
    inputText: 'text-gray-900',
    inputLabel: 'text-gray-700',

    // Hover states
    hoverCard: 'hover:bg-brand-50/50',

    // Gradient overlays
    gradientBlur: 'bg-brand/5',

    // Shadow
    shadow: 'shadow-sm',
  };
};
