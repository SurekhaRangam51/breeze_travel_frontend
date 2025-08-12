import "./Auth.css"
import { useState } from "react"
import { useAuth } from "../../context"
import { validateName, validateNumber, validateEmail, validatePassword, validateConfirmPassword } from "../../utils"
import { SignUpHandler } from "../../services"
export const AuthSignUp = () => {
    const { name, number, email, password, confirmPassword,authDispatch } = useAuth()

   

    const [isValidName, setIsValidName] = useState(true)
    const [isValidNumber, setIsValidNumber] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidConfirmPassword,setIsValidConfirmPassword]=useState(true)
    const handleNameChange = (e) => {
            authDispatch({
                type: "NAME",
                payload: e.target.value
            })
}

    const handleNumberChange = (e) => {
         authDispatch({
            type: "NUMBER",
            payload: e.target.value,
        })

    }
    
    const handleEmailChange = (e) => {
        
        authDispatch({
            type: "EMAIL",
            payload: e.target.value
        })
       
    }
    const handlePasswordChange = (e) => {
       
        authDispatch({
            type: "PASSWORD",
            payload: e.target.value
        })
        
    }
    const handleConfirmPasswordChange = (e) => {
       
        authDispatch({
            type: "CONFIRM_PASSWORD",
            payload: e.target.value
        })
    
    }
    const handleSignUpSubmit=(e)=>{
        e.preventDefault()
      
    const nameValid = validateName(name)
    const numberValid = validateNumber(number)
    const emailValid = validateEmail(email)
    const passwordValid = validatePassword(password)
    const confirmPasswordValid = validateConfirmPassword(confirmPassword, password)

    // Update UI error states
    setIsValidName(nameValid)
    setIsValidNumber(numberValid) 
    setIsValidEmail(emailValid)
    setIsValidPassword(passwordValid)
    setIsValidConfirmPassword(confirmPasswordValid)
        if (nameValid && numberValid && emailValid && passwordValid && confirmPasswordValid) {
        SignUpHandler(name, number, email, password, confirmPassword);
        authDispatch({ type: "CLEAR" });
        authDispatch({
            type:"SET_TO_LOGIN"
        })
             
        }
        
       
    }
   
    
    return (
        <div className="auth-container">
            <form onSubmit={handleSignUpSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Name<span className="asterisk">*</span></label>
                    <input className="auth-input" value={name}
                        placeholder="Enter Your Name" onChange={handleNameChange}
                        required />
                        {!isValidName && <span className="input-err">Enter valid Name</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Number<span className="asterisk">*</span></label>
                    <input className="auth-input" value={number} maxLength="10" type="text"
                        placeholder="Enter Mobile Number" onChange={handleNumberChange}
                        required />
                    {!isValidNumber && <span className="input-err">Enter valid Number</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Email<span className="asterisk">*</span></label>
                    <input className="auth-input" value={email} onChange={handleEmailChange}
                        placeholder="Enter your Email"
                        required />
                        {!isValidEmail && <span className="input-err">Enter valid Email</span>}
                </div>

                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password<span className="asterisk">*</span></label>
                    <input className="auth-input" value={password} type="password" placeholder="Enter Password" onChange={handlePasswordChange} required />
                    {!isValidPassword && <span className="input-err">Enter Strong Password</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label"> Confirm Password<span className="asterisk">*</span></label>
                    <input className="auth-input" value={confirmPassword} type="password" placeholder="Enter Password" onChange={handleConfirmPasswordChange} required />
                    {!isValidConfirmPassword && <span className="input-err">Enter Correctly</span>}
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Sign Up</button>
                </div>
            </form>

        </div>
    )
}