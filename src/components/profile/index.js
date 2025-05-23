import React, { useEffect, useState } from "react";
import { Navbar } from "../Navabar";

export const Profile = () => {
  const [user,setuser] = useState(null);
  useEffect(()=>{
  const fetchprofile = async()=>{
  try{
     const res = await fetch("http://localhost:4000/api/user/profile",{
      method : "GET",
      headers : {"Content-Type": "application/json"},
      credentials: "include"
     })
     if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched profile data:", data);

    if (data.success && data.user) {
      setuser(data.user);
    } else {
      console.error("Unexpected response:", data);
    }
    }
  catch(error)
  {
    console.error(`some error happened ${error.message}`);
  }
  }
  fetchprofile();
}, [])
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-50 flex justify-center items-start py-10 px-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-8 border border-green-200">
          {user ? (
            <>
              <div className="flex items-center space-x-6 mb-8">
                <img
                  src={user.profilePic || "https://via.placeholder.com/80"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-green-600"
                />
                <h1 className="text-2xl font-bold text-green-800">Hello, {user.name}!</h1>
              </div>

              <h2 className="text-xl font-semibold text-green-700 mb-4 border-b pb-2 border-green-200">
                🌿 Personal Information
              </h2>

              <div className="space-y-4 text-green-900">
                <InfoRow label="Name" value={user.name} />
                <InfoRow label="Gender" value={user.gender} />
                <InfoRow label="Email" value={user.email} />
                <InfoRow label="Address" value={user.address} />
              </div>
            </>
          ) : (
            <p className="text-green-700">Loading profile...</p>
          )}
        </div>
      </div>
    </>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-green-600 mb-1">{label}</label>
    <div className="bg-green-100 p-3 rounded-md shadow-inner text-sm">
      {value || "N/A"}
    </div>
  </div>
);
