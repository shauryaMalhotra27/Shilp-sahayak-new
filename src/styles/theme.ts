export interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardForeground: string;
  border: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  available: string;
  preorder: string;
  comingSoon: string;
}

export const defaultTheme: ThemeColors = {
  primary: '173 80% 40%',
  primaryDark: '173 85% 32%',
  primaryLight: '173 73% 55%',
  accent: '199 89% 48%',
  background: '0 0% 100%',
  foreground: '215 28% 17%',
  muted: '210 40% 96%',
  mutedForeground: '215 16% 47%',
  card: '0 0% 100%',
  cardForeground: '215 28% 17%',
  border: '214 32% 91%',
  success: '160 84% 39%',
  warning: '38 92% 50%',
  danger: '0 84% 60%',
  info: '199 89% 48%',
  available: '160 84% 39%',
  preorder: '217 91% 60%',
  comingSoon: '215 14% 65%'
};

export const darkTheme: ThemeColors = {
  ...defaultTheme,
  background: '222 47% 11%',
  foreground: '210 40% 98%',
  muted: '217 33% 17%',
  mutedForeground: '215 20% 70%',
  card: '222 47% 13%',
  cardForeground: '210 40% 98%',
  border: '217 33% 23%'
};

export const theme = defaultTheme;

export const primary = theme.primary;
export const background = theme.background;
export const foreground = theme.foreground;
