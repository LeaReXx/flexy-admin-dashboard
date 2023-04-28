import React, { useEffect, useState } from "react";
import logo from "../../../assets/imgs/logo.svg";
import discordLogo from "../../../assets/imgs/brands/discord.png";
import googleLogo from "../../../assets/imgs/brands/google.png";
import { Checkbox } from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import useLoginUser from "../../../custom hooks/useLoginUser";
import useAuth from "../../../custom hooks/useAuth";
export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(false);
  const [loading, loginToSupabase] = useLoginUser();
  const [authorizationUser, siteUser] = useAuth();
  const loginUser = () => {
    loginToSupabase(email, password);
    authorizationUser();
  };

  useEffect(() => {
    authorizationUser();
  }, []);

  useEffect(() => {
    if (siteUser) {
      console.log("you are logged in");
    } else {
      console.log("not logged in");
    }
  }, [siteUser]);

  return (
    <div className="bg-[#bad8f4] w-screen h-screen flex items-center justify-center">
      {siteUser && <Navigate to="/dashboard" />}
      <div className="bg-[#fff] w-[90%] max-w-[450px] rounded-xl py-4 px-3 sm:px-8">
        <div>
          <img src={logo} alt="logo" className="mx-auto" />
        </div>
        <div className="flex justify-center gap-3 items-center mb-3 mt-7 text-sm">
          <button className="border w-[40%] py-2 px-2 rounded-lg sm:hidden">
            <img
              src={discordLogo}
              alt="Login with discord"
              className="w-6 inline-block mr-2 align-middle"
            />
            Discord
          </button>
          <button className="border w-[40%] py-2 px-2 rounded-lg sm:hidden">
            <img
              src={googleLogo}
              alt="login with google"
              className="w-5 inline-block mr-2 align-middle"
            />
            Google
          </button>
          <button className="border w-[40%] py-2 px-2 rounded-lg hidden sm:block">
            <img
              src={discordLogo}
              alt="Login with discord"
              className="w-6 inline-block mr-2 align-middle"
            />
            Discord Login
          </button>
          <button className="border w-[40%] py-2 px-2 rounded-lg hidden sm:block">
            <img
              src={googleLogo}
              alt="login with google"
              className="w-5 inline-block mr-2 align-middle"
            />
            Google Login
          </button>
        </div>
        <div className="flex justify-center w-full items-center text-[#585858] font-medium my-7 px-3 sm:px-4 sm:gap-1">
          <hr className="w-2/3 sm:w-full" />
          <h3 className="w-full text-center">or sign in with</h3>
          <hr className="w-2/3 sm:w-full" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser();
          }}
          className="flex flex-col gap-6 px-3 sm:px-4"
        >
          <Input
            type="email"
            label="EMAIL ADDRESS"
            onChange={(e) => setEmail(e.target.value)}
            className="border py-2 px-3 rounded-lg"
            required
            disabled={loading}
          />
          <Input
            type="password"
            label="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
            className="border py-2 px-3 rounded-lg"
            required
            disabled={loading}
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-normal">
              <Checkbox label="Remember this device" />
            </div>
            <div className="text-sm text-blue-500 pl-3 font-medium">
              <Link>Forgot Password ?</Link>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#4496F4] py-2 rounded-lg font-medium text-white hover:bg-[#529ff7] cursor-pointer flex justify-center gap-2 items-center"
          >
            Sign In
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </button>
        </form>
        <div className="text-center mt-3">
          <h3 className="text-[#585858] font-medium">
            New to Flexy? {""}
            <Link to="/register" className="text-blue-500 text-sm font-normal">
              Create an account
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
