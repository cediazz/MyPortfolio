import { createContext, useState,useEffect, useContext } from 'react'
import axios from 'axios'
import Page404 from '../Components/Page404/Page404'
import { UrlBackendContext } from './urlBackendContext'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    
    const {url} = useContext(UrlBackendContext)  
    const [user, setUser] = useState()
    const [error, setError] = useState(false)


    const getUser = async () => {
    try {
      if (!url) return // Espera hasta que url esté disponible
      
      let response = await axios.get(`${url}/users`)
      if (response.status === 200) {
        setUser(response.data)
      }
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  useEffect(() => {  
    if (url) { // Solo ejecuta cuando url esté disponible
      getUser()
    }
  }, [url])

    if (error){
       return <Page404 />
    }

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}




