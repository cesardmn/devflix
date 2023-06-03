import { createContext, useContext, useState } from 'react'

export const FormContext = createContext({})

export const FormProvider = (props) => {
  const [form, setForm] = useState(false)

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)
