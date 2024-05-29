import React from "react";
import Button from "@mui/material/Button";
import Discusions_container from "../components/Discusions_container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDiscussion } from "../contexts/DiscussionContext";

const Discussion = () => {
  const navigate = useNavigate();
  const askhandler = () => {
    navigate("/ask");
  };
  const { questionList, setQuestionList } = useDiscussion();
  //question array form discussionContext.jsx

  console.log("disscusion.jsx", questionList);

  //a callback function to accept questions from Ask.jsx and append them to the dummy questions arrray.
  const [questions, setQuestions] = useState();

  return (
    <div>
      {/* Disscusion Forum page */}
      <div className="flex flex-col justify-center w-[70%] mx-auto">
        <div className="my-5 justify-between flex ">
          {" "}
          <Button
            onClick={askhandler}
            sx={{ borderRadius: "30px" }}
            variant="contained"
            size="medium"
          >
            Ask a Question
          </Button>
          <div>
            {/* search bar */}
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-[#f9f9f9] rounded-lg p-2"
            />
          </div>
        </div>

        {/* array of Questions */}
        <div>
          <Discusions_container
            key={questionList.id}
            questionList={questionList}
          />
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div>&copy; 2024 Edu_hub. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Discussion;
