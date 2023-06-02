import { createContext, useContext, useState } from 'react'

export const PlayerContext = createContext({})

export const PlayerProvider = (props) => {
  const [player, setPlayer] = useState(false)

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
