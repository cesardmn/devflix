import { createContext, useContext, useState } from 'react'

export const VideoOnPLayContext = createContext({})

export const VideoOnPLayProvider = (props) => {
  const [videoOnPLay, setVideoOnPLay] = useState(null)

  return (
    <VideoOnPLayContext.Provider
      value={{
        videoOnPLay,
        setVideoOnPLay,
      }}
    >
      {props.children}
    </VideoOnPLayContext.Provider>
  )
}

export const useVideoOnPLay = () => useContext(VideoOnPLayContext)
