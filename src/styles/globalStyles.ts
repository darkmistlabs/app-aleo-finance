import {globalCss} from '@nextui-org/react'

export default globalCss({
  html: {
    $$notifyBannerHeight: '40px',
    $$navbarHeight: '72px',
    $$mainTop: '-116px',
    scrollPaddingTop: '80px',
    '&.dragging-ew': {
      userSelect: 'none !important',
      cursor: 'ew-resize !important',
      '*': {
        userSelect: 'none !important',
        cursor: 'ew-resize !important',
      },
    },
  },

  // css baseline overrides
  blockquote: {
    mb: '$14 !important',
    '& p': {
      fontSize: '1rem !important',
    },
  },
  '#nprogress': {
    pointerEvents: 'none',
  },
  '#nprogress .bar': {
    background: 'var(--nextui-colors-secondary)',
    position: 'fixed',
    zIndex: '999999',
    top: 0,
    left: 0,
    width: '100%',
    height: '3px',
  },
  /* Fancy blur effect */
  ' #nprogress .peg': {
    display: 'block',
    position: 'absolute',
    right: '0px',
    width: '100px',
    height: '100%',
    boxShadow: '0 0 10px var(--nextui-colors-secondary), 0 0 5px var(--nextui-colors-secondary)',
    opacity: 1,
    WebkitTransform: 'rotate(3deg) translate(0px, -4px)',
    transform: 'rotate(3deg) translate(0px, -4px)',
  },
})
