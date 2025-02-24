import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const { loginDispatch, email, password } = useLogin();

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const data = await userLogin(email, password);
        console.log(data);
        console.log(data.access_token);
        if (data && data.access_token) {
            loginDispatch({
                type: 'TOKEN',
                payload: {
                    token: data.access_token
                }
            });
            navigate('/');
        } else {
            console.error("Login failed", data.error || "Unknown error");
        }
    };
    const onEmailChange = (e) => {
        loginDispatch(
            {
                type: 'EMAIL',
                payload: {
                    value: e.target.value
                }
            }
        )
        
    }

    const onPasswordChange = (e) => {
        loginDispatch(
            {
                type: 'PASSWORD',
                payload: {
                    value: e.target.value
                }
            }
        )
    }
    return (
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
           
            <h2 className="flex justify-center text-3xl">Login</h2>
            <div className="flex flex-col gap-2">
                <span>email *</span>
                <input onChange={onEmailChange} value = {email} className="border-b-2" type="text" required placeholder="Enter email">
                </input>
            </div>
            <div className="flex flex-col gap-2">
                <span>Password*</span>
                <input  onChange={onPasswordChange} value = {password} type="password" required placeholder="**********">
                </input>
            </div>
            <div className="flex justify-center items-center   ">
                <button className="button  btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin ">Login</button>

            </div>

        </form>
    )
}