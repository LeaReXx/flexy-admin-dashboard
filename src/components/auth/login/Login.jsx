import React from "react";
import logo from "../../../assets/imgs/logo.svg";
import discordLogo from "../../../assets/imgs/brands/discord.png";
import googleLogo from "../../../assets/imgs/brands/google.png";
import { Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="bg-[#bad8f4] w-screen h-screen flex items-center justify-center">
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
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6 px-3 sm:px-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="border py-2 px-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border py-2 px-3 rounded-lg"
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-normal">
              <Checkbox label="Remember this device" />
            </div>
            <div className="text-sm text-blue-500 pl-3 font-medium">
              <Link>Forgot Password ?</Link>
            </div>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="bg-[#4496F4] py-2 rounded-lg font-medium text-white hover:bg-[#529ff7] cursor-pointer"
          />
        </form>
        <div className="text-center mt-3">
          <h3 className="text-[#585858] font-medium">
            New to Flexy? {""}
            <Link className="text-blue-500 text-sm font-normal"> 
              Create an account
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
