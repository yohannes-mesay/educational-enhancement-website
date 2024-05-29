import React from "react";
import { Link } from "react-router-dom";
const QuestionCard = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my-8">
        Grade 12 Natural Science And Social Science National Exams
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 ">
        <div className="p-4   rounded shadow hover:cursor-pointer  hover:scale-110 duration-300 text-white bg-[#4b6af2] flex flex-col items-center justify-center gap-4 h-[400px]">
          <h1 className="text-5xl font-bold">Biology</h1>
          <p>
            <Link
              to="/biology2015"
              href="biology2015.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2015
            </Link>
          </p>
          <p>
            <Link
              to="/biology2014"
              href="biology2014.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2014
            </Link>
          </p>
          <p>
            <Link
              to="/biology2013"
              className="text-blue-200 text-2xl hover:underline"
            >
              2013
            </Link>
          </p>
        </div>

        <div className="p-4 rounded shadow hover:cursor-pointer  hover:scale-110 duration-300 text-white bg-[#4b6af2] flex flex-col items-center justify-center gap-4 h-[400px]">
          <h1 className="text-5xl font-bold">History</h1>
          <p>
            <a
              href="history2015.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2015
            </a>
          </p>
          <p>
            <a
              href="history2014.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2014
            </a>
          </p>
          <p>
            <a
              href="history2013.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2013
            </a>
          </p>
        </div>

        <div className="p-4  rounded shadow hover:cursor-pointer  hover:scale-110 duration-300  text-white bg-[#4b6af2] flex flex-col items-center justify-center gap-4 h-[400px]">
          <h1 className="text-5xl font-bold">English</h1>
          <p>
            <Link
              to="/english2015"
              href="english2011.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2015
            </Link>
          </p>
          <p>
            <Link
              to="/english2014"
              href="english2012.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2014
            </Link>
          </p>
          <p>
            <Link
              to="/english2013"
              href="english2013.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2013
            </Link>
          </p>
        </div>

        <div className="p-4  rounded shadow hover:cursor-pointer hover:scale-110 duration-300 text-white bg-[#4b6af2] flex flex-col items-center justify-center gap-4 h-[400px]">
          <h1 className="text-5xl font-bold">Civics</h1>
          <p>
            <a
              href="civic2011.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2015
            </a>
          </p>
          <p>
            <a
              href="civic2012.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2014
            </a>
          </p>
          <p>
            <a
              href="civic2013.html"
              className="text-blue-200 text-2xl hover:underline"
            >
              2013
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <div>&copy; 2024 Edu_hub. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default QuestionCard;
