import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/styles/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
