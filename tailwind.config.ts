import type { Config } from 'tailwindcss';
import { theme } from './src/styles/theme';

const hsl = (value: string) => `hsl(${value} / <alpha-value>)`;

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: hsl(theme.primary),
        'primary-dark': hsl(theme.primaryDark),
        'primary-light': hsl(theme.primaryLight),
        accent: hsl(theme.accent),
        background: hsl(theme.background),
        foreground: hsl(theme.foreground),
        muted: hsl(theme.muted),
        'muted-foreground': hsl(theme.mutedForeground),
        card: hsl(theme.card),
        'card-foreground': hsl(theme.cardForeground),
        border: hsl(theme.border),
        success: hsl(theme.success),
        warning: hsl(theme.warning),
        danger: hsl(theme.danger),
        info: hsl(theme.info),
        available: hsl(theme.available),
        preorder: hsl(theme.preorder),
        'coming-soon': hsl(theme.comingSoon)
      }
    }
  },
  darkMode: 'class',
  plugins: []
};

export default config;
