import React, { useEffect, useState } from "react";
import logo from "../../../assets/imgs/logo.svg";
import discordLogo from "../../../assets/imgs/brands/discord.png";
import googleLogo from "../../../assets/imgs/brands/google.png";
import { Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCreateUser from "../../../custom hooks/useCreateUser";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, loading, registerError, connectToSupabase] = useCreateUser();
  const createUser = () => {
    connectToSupabase(email, password, userName);
  };

  useEffect(() => {
    if (!registerError) {
      setUserName("");
      setEmail("");
      setPassword("");
    }
  }, [registerError]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  // console.log(data, loading, error);
  // const { data, error } = await supabase.auth.admin.createUser({
  //   email: "petrol_cs@yahoo.com",
  //   password: "123456789",
  //   data: { name: "Sepehr" },
  // });
  // console.log(data, error);
  // const { data, error } = await supabase.auth.signInWithPassword({
  //   email,
  //   password,
  // });
  return (
    <div className="bg-[#bad8f4] w-screen h-screen flex items-center justify-center">
      <div className="bg-[#fff] w-[90%] max-w-[450px] rounded-xl py-4 px-3 sm:px-8">
        <div>
          <img src={logo} alt="logo" className="mx-auto" />
        </div>
        {loading && <h1>Loading</h1>}
        {data && <h1>Registered</h1>}
        {registerError && <h1>Error</h1>}
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
            <FontAwesomeIcon
              icon={`${
                showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
              }`}
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute top-1/4 right-3 align-middle text-lg cursor-pointer ${
                showPassword ? "text-black" : "text-[#585858]"
              }`}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-normal">
              <Checkbox label="I read and accept all the rules!" required />
            </div>
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="bg-[#4496F4] py-2 rounded-lg font-medium text-white hover:bg-[#529ff7] cursor-pointer"
          />
        </form>
        <div className="text-center mt-3">
          <h3 className="text-[#585858]">
            Already have an Account? {""}
            <Link className="text-blue-500 font-normal">Sign In</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
