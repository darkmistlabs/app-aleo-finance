import React from 'react'
import { Container } from '@nextui-org/react'
import Navbar from './navbar'

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div id="app-container">
      <Navbar />
      <Container
        alignContent="space-between"
        as="main"
        css={{
          position: "relative",
          pt: "$$notifyBannerHeight", // only when the notify banner is visible
          minHeight: "100vh",
          marginTop: "var(--nextui--mainTop)",
          "@mdMax": {
            overflowX: "hidden",
          },
        }}
        id="main-container"
        display="flex"
        gap={0}
        fluid
      >
        {children}
      </Container>
    </div>
  );
};

export default DefaultLayout
