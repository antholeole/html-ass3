import { useEffect, useState } from "react"
import { createContainer } from "unstated-next"

const useUser = () => {
    const [key, setKey] = useState<string | null>(null)
    const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(false);
    
    useEffect(() => {
        setUserIsLoggedIn(key !== null);
    }, [key]);


    const logOutUser = () => {
        setKey(null)
    }    

    return {
        userIsLoggedIn,
        loginUser: setKey,
        logOutUser,
        getApiKey: () => key,
    }
}

export const User = createContainer(useUser)