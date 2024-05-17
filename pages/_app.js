import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        window.dataLayer = window.dataLayer || []; function gtag()
        {window.dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-C3QF2KCW1G');
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
