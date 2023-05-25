import '@styles/globals.css'
import { VideosProvider } from '@providers/VideosProvider'

export default function App({ Component, pageProps }) {
  return (
    <VideosProvider>
      <Component {...pageProps} />
    </VideosProvider>
  )
}
