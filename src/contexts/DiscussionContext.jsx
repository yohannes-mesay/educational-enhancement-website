import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from './AuthContext';
const BASE_URL = "http://localhost:8080";
const DiscussionContext =createContext();
function DiscussionProvider({ children }) {
  const [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [question,setquestion]=useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [check, setCheck] = useState(false);
  const userId = localStorage.getItem("id");
  const [error, setError] = useState(null); 
  useEffect(function () {
    async function getQuestions() {
       const res = await axios.get(`${BASE_URL}/question/all`);
      setQuestionList(res.data);
    }
    console.log("userId", userId);
    getQuestions();
  }, [check]);
 
  async function getSpecificQuestion(questionId) {
    const res = await axios.get(`${BASE_URL}/question/get/${questionId}`);
    setquestion(res.data) 
    return res.data;
  }
  async function postQuestion(newQuestion ) {
    const res = await axios.post(`${BASE_URL}/question/create/${userId}`, newQuestion);
    console.log(res);
    setCheck(prevcheck=>!prevcheck)
    return res.data;
  }
 async function postAnswers(newAnswer){
  console.log(newAnswer); 
  const res=await axios.post(`${BASE_URL}/answer/saveAnswer`, newAnswer)
  console.log(res);
  return res.data;
 }
 async function getAnswers(questionId) {
  try{ const res=await axios.get(`${BASE_URL}/answer/question/${questionId}`)
   setAnswerList(res.data);
  return res.data
  }catch(err){
    setError(err)
  }
  }
  useEffect(function(){
    setTimeout(() => {
        setIsLoading(false)
    }, 3000);
  },[])

  return (
    <DiscussionContext.Provider value={{question, questionList,setQuestionList,isLoading ,postQuestion, postAnswers,
    getAnswers,answerList, getSpecificQuestion}}>
      {children}
    </DiscussionContext.Provider>
  );
}
function useDiscussion() {
  const context = useContext(DiscussionContext);
  if (context === undefined) {
    throw new Error("Discussion context used outside provider");
  }
  return context;
}
export { DiscussionProvider, useDiscussion };
