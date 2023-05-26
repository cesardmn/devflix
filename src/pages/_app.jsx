// styles
import '@styles/globals.css'

// providers
import { DbProvider } from '@providers/DbProvider'
import { VideosProvider } from '@providers/VideosProvider'
import { CategoryFilterProvider } from '@providers/CategoryFilterProvider'

export default function App({ Component, pageProps }) {
  return (
    <DbProvider>
      <VideosProvider>
        <CategoryFilterProvider>
          <Component {...pageProps} />
        </CategoryFilterProvider>
      </VideosProvider>
    </DbProvider>
  )
}
