import React, { useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.svg";
import discordLogo from "../../assets/imgs/brands/discord.png";
import googleLogo from "../../assets/imgs/brands/google.png";
import { Checkbox } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { registerUser, loading, isLoggedIn } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  const createUser = () => registerUser(email, password, userName);
  return (
    <>
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
            <h3 className="w-full text-center">or sign up with</h3>
            <hr className="w-2/3 sm:w-full" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createUser();
            }}
            className="flex flex-col gap-6 px-3 sm:px-4"
          >
            <Input
              type="text"
              label="NAME"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
              disabled={loading}
            />
            <Input
              type="email"
              label="EMAIL ADDRESS"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              disabled={loading}
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="PASSWORD"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                disabled={loading}
                minLength={8}
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={`fa-regular ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } absolute top-2 right-3 align-middle text-lg cursor-pointer ${
                  showPassword ? "text-black" : "text-[#585858]"
                }`}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-normal">
                <Checkbox label="I read and accept all the rules!" required />
              </div>
            </div>
            <button
              type="submit"
              value="Sign Up"
              className={`bg-[#4496F4] py-2 rounded-lg font-medium text-white hover:bg-[#529ff7] cursor-pointer flex justify-center gap-2 items-center`}
              disabled={loading}
            >
              Sign Up
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
            <h3 className="text-[#585858]">
              Already have an Account? {""}
              <Link className="text-blue-500 font-normal" to="/login">
                Sign In
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
