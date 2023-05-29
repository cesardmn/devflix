import { createContext, useContext, useState } from 'react'

export const CategoryFilterContext = createContext({})

export const CategoryFilterProvider = (props) => {
  const [categoryFilter, setCategoryFilter] = useState(null)

  return (
    <CategoryFilterContext.Provider
      value={{
        categoryFilter,
        setCategoryFilter,
      }}
    >
      {props.children}
    </CategoryFilterContext.Provider>
  )
}

export const useCategoryFilter = () => useContext(CategoryFilterContext)
