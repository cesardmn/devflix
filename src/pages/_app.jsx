// styles
import '@styles/globals.css'

// providers
import { SessionProvider } from 'next-auth/react'
import { DbProvider } from '@providers/DbProvider'
import { VideosProvider } from '@providers/VideosProvider'
import { CategoryFilterProvider } from '@providers/CategoryFilterProvider'
import { UserProvider } from '@providers/UserProvider'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <DbProvider>
          <VideosProvider>
            <CategoryFilterProvider>
              <Component {...pageProps} />
            </CategoryFilterProvider>
          </VideosProvider>
        </DbProvider>
      </UserProvider>
    </SessionProvider>
  )
}
