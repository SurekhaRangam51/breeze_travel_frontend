export const AuthReducer = (state, { type, payload }) => {
    switch (type) {
        case "OPEN_AUTH_MODAL":
            return {
                ...state,
                isAuthModalOpen: !state.isAuthModalOpen
            }
        case "SET_TO_LOGIN":
            return {
                ...state,
                selectedTab: "login"
            }
        case "SET_TO_SIGNUP":
            return {
                ...state,
                selectedTab: "signup"
            }
        case "CLOSE_AUTH_MODAL":
            return {
                ...state,
                isAuthModalOpen: !state.isAuthModalOpen
            }
        case "NAME":
            return {
                ...state,
                name: payload
            }
        case "EMAIL":
            return {
                ...state,
                email: payload
            }
        case "NUMBER":
            return {
                ...state,
                number: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
        case "CONFIRM_PASSWORD":
            return {
                ...state,
                confirmPassword: payload
            }
        case "ACCESS_TOKEN":
      return {
        ...state,
        token: payload,
       
      }
        case "CLEAR":
            return {
                ...state,
    
                name: "",
                number: "",
                email: "",
                password: "",
                confirmPassword: ""
            }
        default:
            return state
    }
}