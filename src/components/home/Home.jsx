import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
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
  );
}
