import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link,
  theme
} from '@nextui-org/react'
import styles from '../styles/Home.module.css'

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { GitHub } from 'react-feather'

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Aleo Finance | Brings Aleo to DeFi</title>
        <meta
          name="description"
          content="Brings Aleo to DeFi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <Spacer />
        {/* <Image src="/logo.svg" alt="Vercel Logo" width={200} height={200} /> */}
        <Spacer />
        <Text h1 className={styles.title} style={{ display: 'flex' }}>
          Brings Aleo to DeFi
        </Text>
        <Spacer />
        <Input bordered color="default" placeholder="Type something" size="lg" />
        <Spacer y={0.5} />
        <Input bordered color="secondary" placeholder="Type something" size="lg" />

        <Spacer />
        <Button color="primary" size="lg">
          <GitHub size={18} style={{ marginRight: 10 }} />
          Show on Github
        </Button>
        <Spacer y={0.5} />
        <Button color="secondary" size="lg">Secondary</Button>
        <Spacer y={0.5} />
        <Button color="success" size="lg">Success</Button>
        <Spacer y={0.5} />
        <Button color="warning" size="lg">Warning</Button>
        <Spacer y={0.5} />
        <Button color="error" size="lg">Error</Button>
      </Container>
    </div>
  )
}

export default Home
