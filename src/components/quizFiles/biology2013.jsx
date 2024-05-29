import React, { useState } from "react";
import axios from "axios";
const BioQuiz2013 = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  const correctAnswers = {
    q1: "C",
    q2: "D",
    q3: "B",
    q4: "D",
    q5: "B",
    q6: "D",
    q7: "A",
    q8: "B",
    q9: "D",
    q10: "B",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };
  const subject = "biology";
  const year = "2013";
  const user_id = localStorage.getItem("id");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Compare answers
    const results = Object.keys(answers).map((question) => ({
      question,
      correct: answers[question] === correctAnswers[question],
    }));
    // iterate in keyval and count number of trues
    const correct = results.filter((result) => result.correct).length;
    const total = Object.keys(answers).length;
    // Display results
    alert(`You got ${correct} out of ${total}`);

    // sending the correct count to the database
    if (!user_id) {
      alert("Please login to continue");
      navigate("/join");
    }
    await axios.post("http://localhost:8080/quiz/submit", {
      count: correct,
      userId: user_id,
      year: year,
      subject: subject,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col justify-center px-44 py-10">
        <label>
          1. The word science comes from the Latin word 'Scientia' meaning what?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q1a"
              name="q1"
              value="A"
              checked={answers.q1 === "A"}
              onChange={handleChange}
            />{" "}
            A) Study
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q1b"
              name="q1"
              value="B"
              checked={answers.q1 === "B"}
              onChange={handleChange}
            />{" "}
            B) Experiment
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q1c"
              name="q1"
              value="C"
              checked={answers.q1 === "C"}
              onChange={handleChange}
            />{" "}
            C) Life
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q1d"
              name="q1"
              value="D"
              checked={answers.q1 === "D"}
              onChange={handleChange}
            />{" "}
            D) Knowledge
          </label>
        </div>

        <label>
          2. Which of the following substances can be used over and over again
          in an enzyme-catalyzed reaction?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q2a"
              name="q2"
              value="A"
              checked={answers.q2 === "A"}
              onChange={handleChange}
            />{" "}
            A) Enzyme-substrate complex
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q2b"
              name="q2"
              value="B"
              checked={answers.q2 === "B"}
              onChange={handleChange}
            />{" "}
            B) Substrate
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q2c"
              name="q2"
              value="C"
              checked={answers.q2 === "C"}
              onChange={handleChange}
            />{" "}
            C) Enzyme
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q2d"
              name="q2"
              value="D"
              checked={answers.q2 === "D"}
              onChange={handleChange}
            />{" "}
            D) Reaction product
          </label>
        </div>

        <label>
          3. What is the intermediate compound that is formed during an
          enzyme-catalyzed reaction?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q3a"
              name="q3"
              value="A"
              checked={answers.q3 === "A"}
              onChange={handleChange}
            />{" "}
            A) Reaction
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q3b"
              name="q3"
              value="B"
              checked={answers.q3 === "B"}
              onChange={handleChange}
            />{" "}
            B) Substrate
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q3c"
              name="q3"
              value="C"
              checked={answers.q3 === "C"}
              onChange={handleChange}
            />{" "}
            C) Product
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q3d"
              name="q3"
              value="D"
              checked={answers.q3 === "D"}
              onChange={handleChange}
            />{" "}
            D) Enzyme-substance complex
          </label>
        </div>

        <label>4. Which of the following microorganisms are prokaryotic?</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q4a"
              name="q4"
              value="A"
              checked={answers.q4 === "A"}
              onChange={handleChange}
            />{" "}
            A) Bacteria
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q4b"
              name="q4"
              value="B"
              checked={answers.q4 === "B"}
              onChange={handleChange}
            />{" "}
            B) Protozoa
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q4c"
              name="q4"
              value="C"
              checked={answers.q4 === "C"}
              onChange={handleChange}
            />{" "}
            C) Yeast
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q4d"
              name="q4"
              value="D"
              checked={answers.q4 === "D"}
              onChange={handleChange}
            />{" "}
            D) Algae
          </label>
        </div>

        <label>
          5. Which of the following laboratory tools is LEAST accurate to
          measure 1 ml of liquid?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q5a"
              name="q5"
              value="A"
              checked={answers.q5 === "A"}
              onChange={handleChange}
            />{" "}
            A) Pipette
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q5b"
              name="q5"
              value="B"
              checked={answers.q5 === "B"}
              onChange={handleChange}
            />{" "}
            B) Burett
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q5c"
              name="q5"
              value="C"
              checked={answers.q5 === "C"}
              onChange={handleChange}
            />{" "}
            C) Measuring cylinder
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q5d"
              name="q5"
              value="D"
              checked={answers.q5 === "D"}
              onChange={handleChange}
            />{" "}
            D) Beaker
          </label>
        </div>

        <label>
          6. From which of the following diseases can one be protected by
          sleeping under the cover of a mosquito net?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q6a"
              name="q6"
              value="A"
              checked={answers.q6 === "A"}
              onChange={handleChange}
            />{" "}
            A) Sleeping sickness
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q6b"
              name="q6"
              value="B"
              checked={answers.q6 === "B"}
              onChange={handleChange}
            />{" "}
            B) AIDS
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q6c"
              name="q6"
              value="C"
              checked={answers.q6 === "C"}
              onChange={handleChange}
            />{" "}
            C) Malaria
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q6d"
              name="q6"
              value="D"
              checked={answers.q6 === "D"}
              onChange={handleChange}
            />{" "}
            D) Athlete's foot
          </label>
        </div>

        <label>
          7. Which of the following parts of the flower did Mendel remove from
          young flowers to prevent self-pollination?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q7a"
              name="q7"
              value="A"
              checked={answers.q7 === "A"}
              onChange={handleChange}
            />{" "}
            A) Stamens
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q7b"
              name="q7"
              value="B"
              checked={answers.q7 === "B"}
              onChange={handleChange}
            />{" "}
            B) Sepals
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q7c"
              name="q7"
              value="C"
              checked={answers.q7 === "C"}
              onChange={handleChange}
            />{" "}
            C) Petals
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q7d"
              name="q7"
              value="D"
              checked={answers.q7 === "D"}
              onChange={handleChange}
            />{" "}
            D) Ovaries
          </label>
        </div>

        <label>
          8. What do we call the place where organisms live in their ecosystem?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q8a"
              name="q8"
              value="A"
              checked={answers.q8 === "A"}
              onChange={handleChange}
            />{" "}
            A) Abiotic
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q8b"
              name="q8"
              value="B"
              checked={answers.q8 === "B"}
              onChange={handleChange}
            />{" "}
            B) Biotic
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q8c"
              name="q8"
              value="C"
              checked={answers.q8 === "C"}
              onChange={handleChange}
            />{" "}
            C) Habitat
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q8d"
              name="q8"
              value="D"
              checked={answers.q8 === "D"}
              onChange={handleChange}
            />{" "}
            D) Niche
          </label>
        </div>

        <label>
          9. Which of the following is the sex chromosome constitution of human
          males?
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q9a"
              name="q9"
              value="A"
              checked={answers.q9 === "A"}
              onChange={handleChange}
            />{" "}
            A) XX
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q9b"
              name="q9"
              value="B"
              checked={answers.q9 === "B"}
              onChange={handleChange}
            />{" "}
            B) XY
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q9c"
              name="q9"
              value="C"
              checked={answers.q9 === "C"}
              onChange={handleChange}
            />{" "}
            C) ZZ
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q9d"
              name="q9"
              value="D"
              checked={answers.q9 === "D"}
              onChange={handleChange}
            />{" "}
            D) ZW
          </label>
        </div>

        <label>10. Which of the following plants use CAM photosynthesis?</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q10a"
              name="q10"
              value="A"
              checked={answers.q10 === "A"}
              onChange={handleChange}
            />{" "}
            A) Cactus
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q10b"
              name="q10"
              value="B"
              checked={answers.q10 === "B"}
              onChange={handleChange}
            />{" "}
            B) Rice
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q10c"
              name="q10"
              value="C"
              checked={answers.q10 === "C"}
              onChange={handleChange}
            />{" "}
            C) Beans
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              id="q10d"
              name="q10"
              value="D"
              checked={answers.q10 === "D"}
              onChange={handleChange}
            />{" "}
            D) Maize
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-1/3 my-2 "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BioQuiz2013;
