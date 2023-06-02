// styles
import '@styles/globals.css'

// providers
import { SessionProvider } from 'next-auth/react'
import { DbProvider } from '@providers/DbProvider'
import { VideosProvider } from '@providers/VideosProvider'
import { CategoryFilterProvider } from '@providers/CategoryFilterProvider'
import { UserProvider } from '@providers/UserProvider'
import { PlayerProvider } from '@src/providers/PlayerProvider'
import { VideoOnPLayProvider } from '@src/providers/VideoOnPLayProvider'

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
              <PlayerProvider>
                <VideoOnPLayProvider>
                  <Component {...pageProps} />
                </VideoOnPLayProvider>
              </PlayerProvider>
            </CategoryFilterProvider>
          </VideosProvider>
        </DbProvider>
      </UserProvider>
    </SessionProvider>
  )
}
