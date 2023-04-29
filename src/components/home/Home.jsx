import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../custom hooks/useAuth";
import useLogout from "../../custom hooks/useLogout";
export default function Home() {
  const [authorizationUser, siteUser] = useAuth();
  const [logOutUser] = useLogout();
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

          <button
            className="border border-[#585858] hover:bg-[#585858] hover:text-white py-1 px-3 rounded-md"
            onClick={() => logOutUser()}
          >
            Log Out
          </button>
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
