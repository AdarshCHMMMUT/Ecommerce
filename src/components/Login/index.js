import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom"; // Only if you're using routing
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const onFormSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    try{
       const res = await fetch("http://localhost:4000/api/auth/login",{

        method: "POST",
        headers :{ "Content-Type" : "application/json"},
        body: JSON.stringify({
          email,
          password
        })
       } )
       const data = await res.json();
       if(data.success)
       {
        alert(`you are logged in`);
        navigate("/");
       }
       else{
        alert(res.message);
       }
    }
    catch(error)
    {
    console.error(`something went wrong ${error.message}`)
    }
    console.log("Logging in with", email, password);
  };

  return (
    <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
      <h2 className="flex justify-center text-3xl">Login</h2>

      <div className="flex flex-col gap-2 mt-4">
        <span>email *</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-2"
          type="text"
          required
          placeholder="Enter email"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <span>Password *</span>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b-2"
          type="password"
          required
          placeholder="**********"
        />
      </div>

      <div className="flex justify-end mt-2 text-sm text-blue-600 hover:underline">
        <Link to="/auth/forgot-password">Forgot Password?</Link>
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          type="submit"
          className="button btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
        >
          Login
        </button>
      </div>

      <div className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="text-blue-600 hover:underline">
          Create Account
        </Link>
      </div>
    </form>
  );
};
