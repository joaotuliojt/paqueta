import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      'gradient-primary':
        'linear-gradient(92.46deg, #FF8A29 31.2%, #CF5D00 71.97%)',
      'gradient-secondary':
        'linear-gradient(175.96deg, #F57002 3.3%, rgba(245, 112, 2, 0) 56.06%)',
      white: '#FFFFFF',
      black: '#383838',
      green: '#65C239',
      'modal-mask-gradient':
        'linear-gradient(0deg, rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8))',
    },
    fonts: {
      poppins: 'var(--font-poppins)',
      montserrat: 'var(--font-montserrat)',
    },
  },
})

export const resetStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
    fontSize: '62.5%',
  },
  body: {
    fontSize: '1.6rem',
    fontFamily: '$montserrat',
    minHeight: '100vh',
  },
})
