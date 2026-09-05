import  axios from "axios"
import { useEffect, createContext, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'







export const AuthContext = createContext()
export const AuthProvider = ({children})=>{
   
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loginStatus, setLoginStatus] = useState(null);

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
    return true


    }catch(err){
        console.log(err.response.data)
        return false
    
    }

}

const getUser = async()=>{
         
    try{
    const response = await axios.get("http://localhost:3000/auth/me",{
        withCredentials:true
    })
   
        setUser(response.data.user)
    setIsAuthenticated(true)
    
    


    }catch(err){
        console.log(err.response.data)
        setUser(null)
        setIsAuthenticated(false)

    }finally {
    setIsLoading(false);
     }
    
}



    useEffect(() => {
        getUser()}, []);
            






return(
    <AuthContext.Provider value={{user, setUser, login, isAuthenticated, getUser, loginStatus, setLoginStatus, isLoading}}>
        {children}
    </AuthContext.Provider>
)
}