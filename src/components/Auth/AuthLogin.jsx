import "./Auth.css"
import { useAuth } from "../../context"
import { validateNumber, validatePassword } from "../../utils"
import { useState } from "react"
import { LoginHandler } from "../../services"
export const AuthLogin = () => {
    const { authDispatch, number, password, token } = useAuth()
    const [isValidNumber, setIsValidNumber] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)

    const handleNumberChange = (e) => {
        authDispatch({
            type: "NUMBER",
            payload: e.target.value,
        })

    }
    const handlePasswordChange = (e) => {

        authDispatch({
            type: "PASSWORD",
            payload: e.target.value
        })

    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        const numberValid = validateNumber(number)
        const passwordValid = validatePassword(password)
        setIsValidNumber(numberValid)
        setIsValidPassword(passwordValid)

        if (numberValid && passwordValid) {
            try {
                const tokenFromAPI = await LoginHandler(number, password)

                authDispatch({
                    type: "ACCESS_TOKEN",
                    payload: tokenFromAPI
                })
                authDispatch({
                    type: "CLEAR"
                })

                authDispatch({ type: "CLOSE_AUTH_MODAL" })

            }
            catch (err) {
                console.log(err)
            }
        }
}
const handleLoginCredentials=async ()=>{
     const tokenFromAPI = await LoginHandler(9876543210, "Rekha@12345")

                authDispatch({
                    type: "ACCESS_TOKEN",
                    payload: tokenFromAPI
                })
                authDispatch({
                    type: "CLEAR"
                })

                authDispatch({ type: "CLOSE_AUTH_MODAL" })

}
    return (
        <div className="auth-container">
            <form onSubmit={handleLoginSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Number<span className="asterisk">*</span></label>
                    <input className="auth-input" maxLength="10"
                        placeholder="Enter Mobile Number" value={number} onChange={handleNumberChange}
                        required />
                    {!isValidNumber && <span className="input-err">Invalid Number</span>}
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password<span className="asterisk">*</span></label>
                    <input className="auth-input" type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required />
                    {!isValidPassword && <span className="input-err">Invalid Password</span>}
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Login</button>
                </div>
            </form>
            <div className="cta">
                <button className="button btn-outline-primary cursor-pointer" onClick={handleLoginCredentials}>Login With Test Credentials</button>
            </div>
        </div>
    )
}