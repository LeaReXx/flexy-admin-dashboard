import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";

export default function Dashboard() {
  const { logOutUser, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-[##F6F6F6]">
      <Navbar />
      <div className="flex justify-between p-5">
        <button
          className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md"
          onClick={() => logOutUser()}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
