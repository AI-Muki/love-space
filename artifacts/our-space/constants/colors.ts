/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#241B2F',
    tint: '#C96B5B',

    // Core surfaces
    background: '#FAF7F2',
    foreground: '#241B2F',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#241B2F',

    // Primary action color (buttons, links, active states)
    primary: '#C96B5B',
    primaryForeground: '#ffffff',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#F2E8E1',
    secondaryForeground: '#5E4353',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#F0EAE5',
    mutedForeground: '#8D7C84',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#E6D9ED',
    accentForeground: '#5B3F69',

    // Destructive actions (delete, error states)
    destructive: '#B64A4A',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#E9DED8',
    input: '#E2D4CD',
  },
  dark: {
    text: '#F8F1EC',
    tint: '#E59A88',
    background: '#1E1725',
    foreground: '#F8F1EC',
    card: '#2A2131',
    cardForeground: '#F8F1EC',
    primary: '#E59A88',
    primaryForeground: '#251A29',
    secondary: '#3A2D3C',
    secondaryForeground: '#F2DCD4',
    muted: '#332737',
    mutedForeground: '#BBA9B2',
    accent: '#4A3753',
    accentForeground: '#F0D9F4',
    destructive: '#E08080',
    destructiveForeground: '#251A29',
    border: '#443547',
    input: '#544253',
  },
  radius: 22,
};

export default colors;
