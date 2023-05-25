import { createContext, useContext, useState } from 'react'

export const VideosContext = createContext({})

export const VideosProvider = (props) => {
  const [videos, setVideos] = useState(null)

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
      }}
    >
      {props.children}
    </VideosContext.Provider>
  )
}

export const useVideos = () => useContext(VideosContext)