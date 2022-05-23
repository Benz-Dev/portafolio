import '../styles/globals.css'
import Header from '../includes/header'
import Footer from '../includes/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
