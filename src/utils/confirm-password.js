
export const validateConfirmPassword=(confirmPassword,password)=>{
            
            if(confirmPassword===password){
                return true
            }
            else{
                return false
            }

}