import '@styles/globals.css'
import { VideosProvider } from '@providers/VideosProvider'
import { CategoryFilterProvider } from '@providers/CategoryFilterProvider'

export default function App({ Component, pageProps }) {
  return (
    <VideosProvider>
      <CategoryFilterProvider>
        <Component {...pageProps} />
      </CategoryFilterProvider>
    </VideosProvider>
  )
}
