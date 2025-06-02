import { Navbar } from "../../components/Navabar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const AuthSignup = () => {
  const navigate = useNavigate();   

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setaddress] = useState("");



  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warn("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://thirdcopyback.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,      
          email,
          password,
          profilePicture,
          address
        })
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.success) {
        toast.success(`${name}, your account has been created successfully!`);
        navigate("/auth/login");     
      } else {
        toast.warn(data.message || "Something went wrong!");
      }

    } catch (error) {
      console.error(`Error found: ${error.message}`);
      toast.error("Error occurred during signup!");
    }

    console.log("Signup details:", { email, password, name });
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center mt-32">
        <form
          onSubmit={onFormSubmit}
          className="bg-white shadow-md w-[400px] p-10"
        >
          <h2 className="flex justify-center text-3xl">Sign Up</h2>

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

          <div className="flex flex-col gap-2 mt-4">
            <span>Confirm Password *</span>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-b-2"
              type="password"
              required
              placeholder="**********"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span>Upload profile picture</span>
             <input
              type="text"
              placeholder="Profile Picture URL (optional)"
              value={profilePicture}
               onChange={(e) => setProfilePicture(e.target.value)}
             />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <span>Address </span>
             <input
              type="text"
              placeholder="******************"
              value={address}
               onChange={(e) => setaddress(e.target.value)}
             />
          </div>
          

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="button btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};
