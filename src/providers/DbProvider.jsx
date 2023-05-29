import { createContext, useContext, useState } from 'react'

export const DbContext = createContext({})

export const DbProvider = (props) => {
  const [db, setDb] = useState(null)

  return (
    <DbContext.Provider
      value={{
        db,
        setDb,
      }}
    >
      {props.children}
    </DbContext.Provider>
  )
}

export const useDb = () => useContext(DbContext)
