// import { useState } from "react";

 
 

export const Login = () => {
    //  
    // const [email, setEmail] = useState('')
    // const [password, setPassword]= useState('')
    const onFormSubmit = async (e) => {
        e.preventDefault();
        
         
    };
    // const onEmailChange = (e) => {
        
    //     setEmail(e.target.value)
    // }

    // const onPasswordChange = (e) => {
    //      setPassword(e.target.value)
    // }
    return (
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
           
            <h2 className="flex justify-center text-3xl">Login</h2>
            <div className="flex flex-col gap-2">
                <span>email *</span>
                <input  value = {""} className="border-b-2" type="text" required placeholder="Enter email">
                </input>
            </div>
            <div className="flex flex-col gap-2">
                <span>Password*</span>
                <input  value = {""} type="password" required placeholder="**********">
                </input>
            </div>
            <div className="flex justify-center items-center   ">
                <button className="button  btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin ">Login</button>

            </div>

        </form>
    )
}