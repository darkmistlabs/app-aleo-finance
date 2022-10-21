import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
} from '@nextui-org/react'
import DefaultLayout from '@layouts/default'
import styles from '../styles/Home.module.css'

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { GitHub, Sun, Moon } from 'react-feather'

const HomePage: NextPage = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <DefaultLayout>
      <Container>
        
      </Container>
    </DefaultLayout>
  )
}

export default HomePage
