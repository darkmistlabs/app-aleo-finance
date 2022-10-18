import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link
} from '@nextui-org/react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
        <Spacer />
        <Image src="/logo.svg" alt="Vercel Logo" width={200} height={200} />
        <Spacer />
        <Text h1 className={styles.title} style={{ display: 'flex' }}>
          Welcome to Aleo Finance
        </Text>
        <Spacer />
        <Input bordered color="default" placeholder="Type something" size="lg" />
        <Spacer y={0.5} />
        <Input bordered color="secondary" placeholder="Type something" size="lg" />

        <Spacer />
        <Button color="primary" size="lg">Primary</Button>
        <Spacer y={0.5} />
        <Button color="secondary" size="lg">Secondary</Button>
        <Spacer y={0.5} />
        <Button color="success" size="lg">Success</Button>
        <Spacer y={0.5} />
        <Button color="warning" size="lg">Warning</Button>
        <Spacer y={0.5} />
        <Button color="error" size="lg">Error</Button>
        <Spacer />
        <Button size="lg">
          <a
            className={styles.button}
            href="https://github.com/nextui-org/nextui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show on Github
          </a>
        </Button>
      </Container>
    </div>
  )
}

export default Home
