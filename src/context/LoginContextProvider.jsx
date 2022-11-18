import { createContext, useEffect, useState } from "react"
import { userObserver } from "../helpers/firebase";


export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(false)
    useEffect(() => {
     userObserver(setCurrentUser);
    }, [])

    const [info, setInfo] = useState("")
    
    
  return (
    <LoginContext.Provider value={{currentUser, info, setInfo}}>
        {children}

    </LoginContext.Provider>
  )
}

export default LoginContextProvider