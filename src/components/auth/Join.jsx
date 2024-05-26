import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import landingImage from "../../assets/landing1.png";
const Join = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerAvatar, setRegisterAvatar] = useState("");

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">
            Educational Enhancement
          </p>
          <p className="font-medium text-lg leading-1 text-purple-600">
            Explore your interests, meet new friends & expand your horions
          </p>
          {/* <img
            src={landingImage}
            alt="Landing Page"
            className="rounded-2xl scale-75"
          /> */}
        </div>

        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </main>
    </div>
  );
};

export default Join;
