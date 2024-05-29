import React from "react";
import teacher from "../assets/teacher.png";
import stud from "../assets/stud.jpg";
import Chart from "../components/Chart";

import { useState, useEffect } from "react";
// axios
import axios from "axios";

function Profile() {
  const [response, setResponse] = useState(null);
  const initialRender = async () => {
    const userid = localStorage.getItem("id");
    try {
      const rsp = await axios.get(
        `http://localhost:8080/quiz/result/${userid}`
      );
      console.log("rsp", rsp.data);
      setResponse(rsp.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initialRender();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full my-10">
        <div className="w-1/3 h-1/3 flex text-center rounded-full items-center justify-center">
          <img
            src={localStorage.getItem("role") === "teacher" ? teacher : stud}
            alt="profile"
          />
        </div>
        <div className=" w-1/3 flex flex-col items-center ">
          <span className="flex gap-5 ">
            <h1>Name:</h1>
            <p>
              {localStorage.getItem("name") +
                " " +
                localStorage.getItem("lname")}
            </p>
          </span>
          <span className="flex gap-5 ">
            <h1>Email:</h1>
            <p>{localStorage.getItem("email")}</p>
          </span>
          <span className="flex gap-5 ">
            <h1>Role:</h1>
            <p>{localStorage.getItem("role")}</p>
          </span>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center my-4">
          {response ? (
            response.map((res) => {
              return <Chart given={res} />;
            })
          ) : (
            <p>No Data</p>
          )}
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div>&copy; 2024 Edu_hub. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Profile;
