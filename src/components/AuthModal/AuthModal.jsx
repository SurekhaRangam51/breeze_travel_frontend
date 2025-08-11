import "./AuthModal.css"
import { useAuth } from "../../context"
import { AuthLogin } from "../Auth/AuthLogin"
import { AuthSignUp } from "../Auth/AuthSignUp"
export const AuthModal=()=>{
    const {selectedTab,authDispatch}=useAuth()
    const handleLoginClick=()=>{
        authDispatch({
            type:"SET_TO_LOGIN"
    })
    }
    const handleSignUpClick=()=>{
        authDispatch({
            type:"SET_TO_SIGNUP"
        })
    }
    const handleAuthClose=()=>{
        authDispatch({
            type:"CLOSE_AUTH_MODAL"
        })
    }
    return(
        <div  className="auth-modal-container fixed">
            <div className="auth-modal absolute shadow right-0">
                <div  className="d-flex align-center shadow">
                    <button  className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab==="login" ? "btn-auth-selected" : ""}`}  onClick={handleLoginClick}>Login</button>
                    <button className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab==="signup" ? "btn-auth-selected" : ""}`} onClick={handleSignUpClick}>SignUp</button>
                    <button className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"><span className="material-icons-outlined" onClick={handleAuthClose}>close</span></button>
                </div>
                <div>
                    {selectedTab==="login" ? <AuthLogin />:selectedTab==="signup" && <AuthSignUp />}
                </div>
            </div>
            
        </div>
    )
}