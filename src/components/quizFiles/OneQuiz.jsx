import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function oneQuiz() {
  const navigate = useNavigate();
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
  const subject = "english";
  const year = "2014";
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
        <div>
          <label>
            1. Let us____________the decision until next week. There could be
            unexpected changes.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q1"
                value="A"
                checked={answers.q1 === "A"}
                onChange={handleChange}
              />
              A) Pass
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q1"
                value="B"
                checked={answers.q1 === "B"}
                onChange={handleChange}
              />
              B) by pass
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q1"
                value="C"
                checked={answers.q1 === "C"}
                onChange={handleChange}
              />
              C) defer
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q1"
                value="D"
                checked={answers.q1 === "D"}
                onChange={handleChange}
              />
              D) differ
            </label>
          </div>
        </div>

        <div>
          <label>
            2. Can you go to the___________ and ask her if they have a pen? I
            lost mine this morning.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q2"
                value="A"
                checked={answers.q2 === "A"}
                onChange={handleChange}
              />
              A) Station
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q2"
                value="B"
                checked={answers.q2 === "B"}
                onChange={handleChange}
              />
              B) stationer
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q2"
                value="C"
                checked={answers.q2 === "C"}
                onChange={handleChange}
              />
              C) stationary
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q2"
                value="D"
                checked={answers.q2 === "D"}
                onChange={handleChange}
              />
              D) stationery
            </label>
          </div>
        </div>

        <div>
          <label>
            3. Is it true that your friend was____________ from hospital? That
            is really good news.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q3"
                value="A"
                checked={answers.q3 === "A"}
                onChange={handleChange}
              />
              A) relieved
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q3"
                value="B"
                checked={answers.q3 === "B"}
                onChange={handleChange}
              />
              B) discharged
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q3"
                value="C"
                checked={answers.q3 === "C"}
                onChange={handleChange}
              />
              C) sent out
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q3"
                value="D"
                checked={answers.q3 === "D"}
                onChange={handleChange}
              />
              D) released
            </label>
          </div>
        </div>

        <div>
          <label>
            4. Writing a formal letter in English is not difficult, but you
            should follow certain_______________.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q4"
                value="A"
                checked={answers.q4 === "A"}
                onChange={handleChange}
              />
              A) convictions
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q4"
                value="B"
                checked={answers.q4 === "B"}
                onChange={handleChange}
              />
              B) conversations
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q4"
                value="C"
                checked={answers.q4 === "C"}
                onChange={handleChange}
              />
              C) conversion
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q4"
                value="D"
                checked={answers.q4 === "D"}
                onChange={handleChange}
              />
              D) conventions
            </label>
          </div>
        </div>

        <div>
          <label>
            5. Newton was a great English scientist. He____________ the law of
            gravitation.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q5"
                value="A"
                checked={answers.q5 === "A"}
                onChange={handleChange}
              />
              A) invented
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q5"
                value="B"
                checked={answers.q5 === "B"}
                onChange={handleChange}
              />
              B) discovered
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q5"
                value="C"
                checked={answers.q5 === "C"}
                onChange={handleChange}
              />
              C) created
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q5"
                value="D"
                checked={answers.q5 === "D"}
                onChange={handleChange}
              />
              D) declared
            </label>
          </div>
        </div>

        <div>
          <label>
            6. Ato Bisrat has been ______________chairman of the new committee.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q6"
                value="A"
                checked={answers.q6 === "A"}
                onChange={handleChange}
              />
              A) apologized
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q6"
                value="B"
                checked={answers.q6 === "B"}
                onChange={handleChange}
              />
              B) appreciated
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q6"
                value="C"
                checked={answers.q6 === "C"}
                onChange={handleChange}
              />
              C) applauded
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q6"
                value="D"
                checked={answers.q6 === "D"}
                onChange={handleChange}
              />
              D) appointed
            </label>
          </div>
        </div>

        <div>
          <label>
            7. I____________ them that there had been financial problems earlier
            in the year.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q7"
                value="A"
                checked={answers.q7 === "A"}
                onChange={handleChange}
              />
              A) told
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q7"
                value="B"
                checked={answers.q7 === "B"}
                onChange={handleChange}
              />
              B) spoke
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q7"
                value="C"
                checked={answers.q7 === "C"}
                onChange={handleChange}
              />
              C) said
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q7"
                value="D"
                checked={answers.q7 === "D"}
                onChange={handleChange}
              />
              D) discussed
            </label>
          </div>
        </div>

        <div>
          <label>8. She admitted that she had____________ to us.</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q8"
                value="A"
                checked={answers.q8 === "A"}
                onChange={handleChange}
              />
              A) cheat
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q8"
                value="B"
                checked={answers.q8 === "B"}
                onChange={handleChange}
              />
              B) lied
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q8"
                value="C"
                checked={answers.q8 === "C"}
                onChange={handleChange}
              />
              C) deceive
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q8"
                value="D"
                checked={answers.q8 === "D"}
                onChange={handleChange}
              />
              D) pretend
            </label>
          </div>
        </div>

        <div>
          <label>
            9. He has been______________ because he has a high temperature.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q9"
                value="A"
                checked={answers.q9 === "A"}
                onChange={handleChange}
              />
              A) put off
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q9"
                value="B"
                checked={answers.q9 === "B"}
                onChange={handleChange}
              />
              B) set off
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q9"
                value="C"
                checked={answers.q9 === "C"}
                onChange={handleChange}
              />
              C) cut off
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q9"
                value="D"
                checked={answers.q9 === "D"}
                onChange={handleChange}
              />
              D) laid off
            </label>
          </div>
        </div>

        <div>
          <label>
            10. A: How many brothers and sisters do you have? B: I have none. I
            am a/an ________________ child.
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q10"
                value="A"
                checked={answers.q10 === "A"}
                onChange={handleChange}
              />
              A) lonely
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q10"
                value="B"
                checked={answers.q10 === "B"}
                onChange={handleChange}
              />
              B) only
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q10"
                value="C"
                checked={answers.q10 === "C"}
                onChange={handleChange}
              />
              C) unique
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="q10"
                value="D"
                checked={answers.q10 === "D"}
                onChange={handleChange}
              />
              D) single
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-1/3 my-2 "
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default oneQuiz;
