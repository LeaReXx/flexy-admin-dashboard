import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../custom hooks/useAuth";
export default function Home() {
  const [authorizationUser, siteUser] = useAuth();
  useEffect(() => {
    authorizationUser();
  }, []);

  return (
    <>
      {siteUser ? (
        <div className="flex gap-3 justify-center my-5">
          <NavLink to="/dashboard">
            <button className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md">
              Dashboard
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="flex gap-3 justify-center my-5">
          <NavLink to="/Login">
            <button className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md">
              Register
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}
