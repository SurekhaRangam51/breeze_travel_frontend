import { createContext,useContext, useReducer } from "react";
import { AuthReducer } from "../Reducers";
const initialState={
    isAuthModalOpen:false,
    isAuthDropDownOpen:false,
    selectedTab:"login",
    name:"",
    number:"",
    email:"",
    password:"",
    confirmPassword:"",
    token:""
}
const Authcontext=createContext()
const AuthProvider=({children})=>{
    const [{isAuthModalOpen,selectedTab,name,number,email,password, confirmPassword,token,isAuthDropDownOpen},authDispatch]=useReducer(AuthReducer,initialState)
    return(
         <Authcontext.Provider value={{isAuthModalOpen,selectedTab,name,number,email,password, confirmPassword,token,isAuthDropDownOpen,authDispatch}}>
        {children}
    </Authcontext.Provider>

    )
}
   

const useAuth=()=>useContext(Authcontext)
export {AuthProvider,useAuth}