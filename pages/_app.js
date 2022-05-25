import '../styles/globals.css'
import Header from '../includes/header'
import Footer from '../includes/footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
       <Head>
        <title>Jose Manuel Developer</title>
        <meta name="keywords" content="Web developer, developer, fullstack, portfolio, portafolio, desarrollador, programador" />
        <meta name="author" content="BenzDev" />
        <meta name="description" content="Benz Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Benz Developer | Portfolio" />
        <meta property="og:description" content="Here you can see my portfolio where my skills, projects and means of contact are contemplated" />
        <meta property="og:url" content="https://benzdev.ml/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
