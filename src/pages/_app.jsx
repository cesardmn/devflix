// styles
import '@styles/globals.css'

// providers
import { SessionProvider } from 'next-auth/react'
import { DbProvider } from '@providers/DbProvider'
import { VideosProvider } from '@providers/VideosProvider'
import { FilterProvider } from '@src/providers/FilterProvider'
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
            <FilterProvider>
              <PlayerProvider>
                <VideoOnPLayProvider>
                  <Component {...pageProps} />
                </VideoOnPLayProvider>
              </PlayerProvider>
            </FilterProvider>
          </VideosProvider>
        </DbProvider>
      </UserProvider>
    </SessionProvider>
  )
}
