import '@/assets/styles/globals.scss'
import '@/assets/styles/app.scss'

import Head from 'next/head'
import Script from 'next/script'

import LayoutDeafult from '@/components/layouts/LayoutDefault'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>ITMO Boilerplate</title>
    </Head>
    <LayoutDeafult>
      <Component {...pageProps} />
    </LayoutDeafult>
    <Script id="scroll-restoration">{`window.history.scrollRestoration = "manual"`}</Script>
  </>
)

export default App
