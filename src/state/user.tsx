import {useState, createContext, useContext} from 'react'

const context = createContext<any>(undefined)

export const UserProvider: React.FC = ({children}) => {
    const [user, setUser]= useState()

    return(
        <context.Provider value={{
            user:user,
            set: (user:any) => {setUser(user)},
            removeUser: () =>{setUser ({firstName: ""})}
        }}>
            {children}
        </context.Provider>
    )
}

export const useUsers = () => {
    const userState = useContext(context)
    return userState
}