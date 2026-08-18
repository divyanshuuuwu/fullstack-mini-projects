import  axios from "axios"
import { useEffect, createContext, useState } from "react";






export const AuthContext = createContext()
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

const login = async(email, password)=>{
    try{
        const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
           email,
           password 
        },
        {
            withCredentials:true
        }
    )   
     await getUser();

    }catch(err){
        console.log(err)
    }

}

const getUser = async()=>{
    const response = await axios.get("http://localhost:3000/auth/me",{
        withCredentials:true
    })
    try{
        setUser(response.data.user)
    setIsAuthenticated(true)
    console.log(response.data.user)


    }catch(err){
        console.log(err)
        setUser(null)
        setIsAuthenticated(false)

    }finally {
    setIsLoading(false);
     }
    
}



    useEffect(() => {
        getUser()}, []);
            






return(
    <AuthContext.Provider value={{user, setUser, login, isAuthenticated, getUser}}>
        {children}
    </AuthContext.Provider>
)
}