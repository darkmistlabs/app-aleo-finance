import React from 'react'
import cn from 'classnames'
import { CSS, styled, useTheme, Switch } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

import { Moon, Sun } from 'react-feather'

interface Props {
  className?: string;
  css?: CSS;
}

const StyledButton = styled('button', {
  dflex: 'center',
  size: 'auto',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  '& .theme-selector-icon': {
    color: '$colors$accents6',
  },
  '@xsMax': {
    px: '$2',
  },
});

const ThemeToggle: React.FC<Props> = ({className, css}) => {
  const {setTheme} = useNextTheme()
  const {isDark} = useTheme()

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Switch
      checked={isDark}
      iconOn={<Moon />}
      iconOff={<Sun />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}

export default ThemeToggle
