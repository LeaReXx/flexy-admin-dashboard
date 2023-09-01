import React, { useContext, useEffect } from "react";
import logo from "../../assets/imgs/logo.svg";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const authContext = useContext(AuthContext);

  return authContext.isLoggedIn ? (
    <div className="flex justify-between p-5">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <button
        className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md"
        onClick={() => authContext.logOut()}
      >
        Log out
      </button>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
