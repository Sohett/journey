module.exports = {
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#111',
      white: '#fff',
      gray: {
        100: '#F5F6FB',
        500: "#7C8088",
        700: '#606770',
        900: '#3b414a',
      },
      green: {
        100: '#e8f2f1',
        500: '#88DAB0',
      },
      purple: {
        50: "#E9EBFE",
        100: "#DDE0FD",
        500: "#5566FA",
      },
      red: {
        500: '#FF6B6B',
      },
      orange: {
        500: '#FFA34F',
      },
    },
    fontFamily: {
      body: ['Rubik', 'sans-serif'],
      headline: ['Rubik Mono One', 'sans-serif'],
      'mono-bold': ['GT Pressura Mono Bold', 'mono'],
    },
    fontSize: {
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.75'],
      lg: ['1.125rem', '1.75'],
      xl: ['1.25rem', '1.3'],
      '2xl': ['1.5rem', '1.25'],
      '3xl': ['2rem', '1.25'],
      '4xl': ['2.625rem', '1.2'],
      '5xl': ['3.125rem', '1.2'],
      '6xl': ['3.75rem', '1.0667'],
      '7xl': ['6.25rem', '1'],
    },
    lineHeight: {
      none: '1',
      tight: '1.375',
      normal: '1.75',
      loose: '2',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
      xxl: '1680px',
    },
    extend: {
      // eslint-disable-next-line no-unused-vars
      boxShadow: theme => ({
        default: '0 4px 6px 0 rgba(233, 235, 255, 0.6)',
      }),
      borderColor: theme => ({
        default: theme('colors.gray.200', 'currentColor'),
      }),
      borderWidth: {
        '16': '16px',
      },
      fill: {
        none: 'none',
      },
      letterSpacing: {
        tightest: '-.075em',
      },
      width: {
        '9/10': '90%',
        '9/20': '45%',
        '11/20': '55%',
        '11/10': '110%',
        '80': '20rem',
      },
      height: {
        '160': '39rem',
        '80-vh': '80vh',
      },
      inset: {
        '80': '20rem',
        '140': '35rem',
      },
      margin: {
        '42': '10.5rem',
      },
      minHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '24': '6rem',
        '40': '10rem',
        '1/2': '50%',
        full: '100%',
        '300': '300vh',
      },
      maxHeight: {
        'inset-2': 'calc(100vh - 1rem)',
        '56': '28rem',
      },
      maxWidth: {
        '2xs': '15rem',
        '120': '120%',
      },
      minWidth: {
        px: '1px',
        xs: '20rem'
      },
    },
  },
  variants: {
    borderRadius: ['responsive', 'first', 'last'],
    textColor: ['responsive', 'hover', 'last'],
    fontWeight: ['last'],
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    // require('./src/aassets/plugins').stickyPositions,
  ],
};