
import axios from "axios"

export const userLogin = async (email, password)=>{
    const url = 'https://api.escuelajs.co/api/v1/auth/login';
    try{
        if (!email || !password) {
            throw new Error("email and password are required");
        }
        const {data} = await axios.post(url,
            {
               email:email,
               password: password
            }
        )
        console.log({data});
        return data;
    } catch(err){
        console.error(err);
        return err.response ? err.response.data : { error: 'Something went wrong' };  
    }

}