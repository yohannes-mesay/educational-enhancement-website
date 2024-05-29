import { Facebook, GitHub, Google } from "@mui/icons-material";
import { useAuth, AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const SignupForm = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const { signup, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    lname: "Tigistu",
    password: "50",
    email: "email",
    role: "student",
    fname: "chief",
  });
  const [formErrors, setFormErrors] = useState({ email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormErrors({
        ...formErrors,
        email: isValidEmail ? "" : "Please enter a valid email address",
      });
    }
    setFormData({ ...formData, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();

    const singed = await signup(formData);

    if (singed) {
      alert("sucess. please login");
      setIsLogin(true);
      navigate("/join");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col items-center w-2/6 scale-125 transition duration-1000 ease-in mr-32"
    >
      <h2 className="p-3 text-3xl font-bold text-white">
        Educational Enhancement
      </h2>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <h3 className="text-xl font-semibold text-white pt-2">Create Account!</h3>
      <div className="flex space-x-2 m-4 items-center justify-center">
        <div className="socialIcon border-white">
          <Facebook className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <GitHub className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <Google className="text-white" />
        </div>
      </div>
      {/* Inputs */}
      <div className="flex flex-col items-center justify-center mt-2">
        <input
          type="text"
          name="fname"
          className=" text-gray-700 rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-purple-600 focus:outline-none focus:ring-0"
          placeholder="First Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="lname"
          className="text-gray-700 rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-purple-600 focus:outline-none focus:ring-0"
          placeholder="Last Name"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          className="text-gray-700 rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-purple-600 focus:outline-none focus:ring-0"
          placeholder="Email"
          onChange={handleChange}
        ></input>
        {!formErrors.email && (
          <p className="text-red-500 text-xs italic">{formErrors.email}</p>
        )}
        <input
          type="password"
          name="password"
          className="text-gray-700 rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-purple-600 focus:outline-none focus:ring-0"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="role"
            onChange={handleChange}
          >
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="teacher"
              control={<Radio />}
              label="Teacher"
            />
          </RadioGroup>
        </FormControl>

        <button className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in">
          Sign Up
        </button>
      </div>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <p className="text-white mt-4 text-sm">Already have an account?</p>
      <p
        className="text-white mb-4 text-sm font-medium cursor-pointer"
        onClick={() => setIsLogin(true)}
      >
        Sign In to your Account?
      </p>
      {error && <p className="text-red-500 text-center">{error.message}</p>}
    </form>
  );
};

export default SignupForm;
