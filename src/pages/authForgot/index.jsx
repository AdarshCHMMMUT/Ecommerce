import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navabar"
import { toast } from "react-toastify";
export const Authforgot = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setnewpassword] = useState('');

    const [showOtpField, setShowOtpField] = useState(false);
    const navigate = useNavigate();
  
    const verifyEmail = async () => {
      if (!name || !email) {
        toast.info("Please fill in both Name and Email!");
        return;
      }
  
      
      try {
        const res = await fetch("https://thirdcopyback.vercel.app/api/auth/send-reset-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email })
        });
  
        const data = await res.json();
  
        if (data.success) {
          toast.success("Verification mail sent. Check your email for the OTP.");
          setShowOtpField(true);  
        } else {
          toast.warn(data.message || "Verification failed.");
        }
      } catch (error) {
        console.error(`Verification failed: ${error.message}`);
        toast.error("Error verifying email.");
      }
    };
  
    const resetPassword = async () => {
      if (!otp) {
        toast.info("Please enter the OTP.");
        return;
      }
     try{
        const res = await fetch("https://thirdcopyback.vercel.app/api/auth/reset-password",{
            method: "POST",
            headers: {"Content-Type" :"application/json"},
            body:JSON.stringify({
                email,
                otp,
                newPassword
            })
        })
        const data = await res.json();
        if(data.success)
        {
          toast.success(`your password is has been reset`);
          navigate("/auth/login");
        }
     }
     catch(error)
     {
        console.error(`something is wrong with otp`);
     }
      
      
    };
  
    return(
        <>
        <Navbar/>
        <main className = "flex justify-center items-center mt-32">
        <form className="bg-white shadow-md w-[400px] p-10">
      <h2 className="flex justify-center text-3xl">Forgot Password</h2>

      <div className="flex flex-col gap-2 mt-4">
        <span>Name *</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-b-2"
          type="text"
          required
          placeholder="Enter Your Full Name"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <span>Email *</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-2"
          type="email"
          required
          placeholder="Enter email"
        />
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          type="button"
          onClick={verifyEmail}
          className="button btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
        >
          Verify Email
        </button>
      </div>

      {showOtpField && (
        <>
        <div className="flex flex-col gap-2 mt-4">
          <span>Enter OTP *</span>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border-b-2"
            type="text"
            required
            placeholder="Enter OTP"
          />
        </div>
         <div className="flex flex-col gap-2 mt-4">
         <span>New Password *</span>
         <input
           value={newPassword}
           onChange={(e) => setnewpassword(e.target.value)}
           className="border-b-2"
           type="password"
           required
           placeholder="Enter new password"
         />
       </div>
       </>
      )}

      {showOtpField && (
        <div className="flex justify-center items-center mt-6">
          <button
            type="button"
            onClick={resetPassword}
            className="button btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
          >
            Reset Password
          </button>
        </div>
      )}

      <div className="text-center mt-4 text-sm">
        Remember your password?{" "}
        <Link to="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </div>
    </form>
        </main>
        </>
    )
}
 