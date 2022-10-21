import {styled} from '@nextui-org/react'

export const StyledNavMainContainer = styled('nav', {
  top: 0,
  height: '$$navbarHeight',
  width: '100%',
  position: 'fixed',
  background: '$colors$accents0',
  zIndex: '$max',
})

export const StyledNavContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  size: '100%',
  '& .navbar__social-icon': {
    fill: '$colors$accents6',
  },
  variants: {
    showBlur: {
      true: {
        background: '$background',
        '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
          background: '$headerBackground',
        },
      },
    },
    isDetached: {
      true: {
        boxShadow: '0px 5px 20px -10px rgba(2, 1, 1, 0.5)',
      },
      false: {
        backdropFilter: 'none',
        boxShadow: 'none',
        background: 'transparent',
      },
    },
  },
})
