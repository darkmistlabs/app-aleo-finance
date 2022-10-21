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

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { GitHub, Sun, Moon } from 'react-feather'

const HomePage: NextPage = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <DefaultLayout>
      <Container>
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
          <Spacer />
          {/* <Image src="/logo.svg" alt="Vercel Logo" width={200} height={200} /> */}
          <Spacer />
          <Text h1 style={{ display: 'flex' }}>
            Brings Aleo to DeFi
          </Text>
          <Spacer />
          <Input bordered color="default" id="1" placeholder="Type something" size="lg" />
          <Spacer y={0.5} />
          <Input bordered color="secondary" id="2" placeholder="Type something" size="lg" />

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
      </Container>
    </DefaultLayout>
  )
}

export default HomePage
