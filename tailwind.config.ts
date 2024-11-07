import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: { max: '321px' },
      sm: { max: '641px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
      '2xl': { max: '1536px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Segoe-UI': '"Segoe UI", Arial, sans-serif',
        times: ['Times New Roman', 'serif'],
        Muli: ['Muli', 'Arial', 'sans-serif'],
      },
      animation: {
        buzz: 'buzz-button 0.9s ease-in-out infinite',
      },
      keyframes: {
        'buzz-button': {
          '0%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '10%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '20%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '30%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '40%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '50%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '100%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
        },
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      primary: '#a8c7fa',
      secondary: '#7fcfff',
      undersea: '#1B1464',
      darkpurple: '#4d1e5d',
      lightpurple: '#6c61d3',
      buttonYellow: '#FFC107',
      radiantyellow: '#FFC107',
      warning: '#fcbd00',
      neutral: '#ababab',
      black: '#000000',
      red: '#c00000',
      green: '#00b050',
      lime: '#70ad47',
      purple: '#6666ff',
      error: '#dc362e',
      'primary-button': '#4472c4',
      'primary-dark-button': '#2f5597',
      'primary-dark': '#5b9bd5',
      'active-neutral': '#1f1f1f',
      'warning-dark': '#c55a11',
      'secondary-dark': '#3399ff',
      'env-row-table': '#f3f6fb',
      'em-row-table': '#f2f2f2',
      'second-button-background': '#3b3838',
      'primary-surface': '#3077b2',
      'warning-light': '#ffc000',
      'error-light': '#FF0000',
      inactive: '#808080',
      'disable-input': '#ffebeb',
    },
  },
  plugins: [],
};
export default config;
