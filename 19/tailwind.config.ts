import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          primary: '#25d366',      // WhatsApp green
          dark: '#075E54',         // Dark green for headers or accents
          light: '#DCF8C6',        // Light green for message bubbles
          background: '#fcf5eb',   // Light background color
        },
        private: {
          background: '#262524',
          primary: '#202c33',
          primaryHover: '#2a3942',
          secondary: '#111b21',

        },
        icons: {
          iconsPrimary: '#00a884',
          iconSecondary: '#53bdeb',
          muted: '#aebac1'
        },
        message: {
          background: '#aebac1'
        }
      },
      maxWidth: {
        '100': '31rem', // Custom class for 496px
      },
      width: {
        '100': '31rem',
      }
    },
  },

};

export default config;
