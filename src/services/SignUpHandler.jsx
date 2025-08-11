import axios from "axios"
export const SignUpHandler=async(name,number,email,password)=>{
    try{
        const data=await axios.post("http://localhost:3700/api/auth/signup",{
            username:name,
            number:number,
            email:email,
            password:password
        })
       //console.log(data) 
    }
    catch(err){
       console.log(err)
    }

}