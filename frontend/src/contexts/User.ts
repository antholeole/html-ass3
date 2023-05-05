import { useState } from "react"
import { createContainer } from "unstated-next"

const useUser = () => {
    const [key, setKey] = useState<string | null>(null)
    
    const userIsLoggedin = () => key != null

    const logOutUser = () => {
        setKey(null)
    }    

    return {
        userIsLoggedin,
        loginUser: setKey,
        logOutUser,
        getApiKey: () => key,
    }
}

export const User = createContainer(useUser)