import axios from 'axios'
export const LoginHandler = async (number, password) => {
    
    try {
        const { data:{token}} = await axios.post("http://localhost:3700/api/auth/login", {
            number: number,
            password: password
        })
     
       return token
    }
    catch (err) {
        console.log(err)
    }

}