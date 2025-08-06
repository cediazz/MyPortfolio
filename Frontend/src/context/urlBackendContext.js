import { createContext, useState, useEffect } from 'react'
import Page404 from '../Components/Page404/Page404'

export const UrlBackendContext = createContext()

export const UrlBackendProvider = ({ children }) => {

  const [url, setURL] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      const isDevelopment = process.env.NODE_ENV === 'development'
      const url = isDevelopment ? process.env.REACT_APP_BACKEND_HOST
        : process.env.REACT_APP_DEPLOY_BACKEND_HOST
      setURL(url)
    }
    catch (error) {
      console.log(error)
      setError(true)
    }
  }, [])

  if (error) {
    return <Page404 />
  }

  return (
    <UrlBackendContext.Provider value={{ url }}>
      {children}
    </UrlBackendContext.Provider>
  )
}




