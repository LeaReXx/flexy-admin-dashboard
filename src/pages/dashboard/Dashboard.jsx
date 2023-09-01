import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { logOutUser, isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <div className="flex justify-between p-5">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <button
        className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md"
        onClick={() => logOutUser()}
      >
        Log out
      </button>
    </div>
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
}
