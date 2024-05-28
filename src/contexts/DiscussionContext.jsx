import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from './AuthContext';
const BASE_URL = "http://localhost:8080/question";
const DiscussionContext =createContext();
function DiscussionProvider({ children }) {
  const [questionList, setQuestionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [check, setCheck] = useState(false);
  const {userId}=useAuth();
  console.log("userId", userId);
  console.log("quesionlist", questionList);
  useEffect(function () {
    async function getQuestions() {
       const res = await axios.get(`${BASE_URL}/all`);
      setQuestionList(res.data);
    }
    getQuestions();
  }, [check]);
 
  async function postQuestion(newQuestion ) {
    const res = await axios.post(`${BASE_URL}/create/${userId}`, newQuestion);
    console.log(res);
    setCheck(prevcheck=>!prevcheck)
    return res.data;


  }

  
  useEffect(function(){
    setTimeout(() => {
        setIsLoading(false)
    }, 3000);
  },[])
  return (
    <DiscussionContext.Provider value={{ questionList,setQuestionList,isLoading ,postQuestion}}>
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
