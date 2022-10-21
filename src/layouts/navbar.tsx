import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button, Row, Col, Spacer, Link, Navbar as NextUINavbar, Container, Text, useTheme } from '@nextui-org/react'
import { StyledNavContainer, StyledNavMainContainer } from './styles'
import { Logo, ThemeToggle } from '@components'
import { GitHub } from 'react-feather'
// import { ThemeToggle } from '@components'

export interface Props {
  hasNotify?: boolean
}

const Navbar: React.FC = ({ hasNotify }: Props) => {
  const { isDark } = useTheme()
  const { route } = useRouter()
  const [scrollPosition, setScrollPosition] = useState(0)
  const isDetached = hasNotify ? scrollPosition > 40 : scrollPosition > 0

  useEffect(() => {
    setScrollPosition((typeof window !== 'undefined' && window.pageYOffset) || 0)
    window.addEventListener('scroll', onScroll.bind(this))

    return () => {
      window.removeEventListener('scroll', onScroll.bind(this))
    }
  }, [])

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset)
    })
  }  

  return (
    <NextUINavbar maxWidth="fluid">
      <NextUINavbar.Brand>
        <NextLink href="/">
          <>
            <Logo />
            <Text b color="inherit" hideIn="xs">Aleo Finance</Text>
          </>
        </NextLink>
      </NextUINavbar.Brand>

      <NextUINavbar.Content hideIn="xs" variant="default" gap="$18" enableCursorHighlight>
        <NextLink href="/">
          <NextUINavbar.Link href="/" isActive={route === '/'}>Home</NextUINavbar.Link>
        </NextLink>
        <NextLink href="/pool">
          <NextUINavbar.Link href="/pool" isActive={route === '/pool'} css={{ display: 'block' }}>Pool</NextUINavbar.Link>
        </NextLink>
        <NextUINavbar.Link href="#">Company</NextUINavbar.Link>
      </NextUINavbar.Content>

      <NextUINavbar.Content>
        <NextUINavbar.Link color="inherit" href="#">
          Login
        </NextUINavbar.Link>
        {/* <NextUINavbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </NextUINavbar.Item> */}
        <ThemeToggle />
      </NextUINavbar.Content>

      {/* <NextUINavbar.Toggle aria-label="toggle navigation" /> */}
    </NextUINavbar>
  )
}

export default Navbar
