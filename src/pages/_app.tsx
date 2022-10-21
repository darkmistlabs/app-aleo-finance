import '../styles/globals.css'
import type { AppProps } from 'next/app'
import globalStyles from '../styles/globalStyles'

// theme
import ThemeProvider from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
