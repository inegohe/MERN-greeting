import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({children}) => {
    const [ user, setUser ] = useState(false);

    return(
        <GlobalContext.Provider
        value={{
            user,
            setUser
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
