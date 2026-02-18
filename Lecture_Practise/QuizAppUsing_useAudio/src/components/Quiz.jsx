import { useState, useEffect } from "react";
import questions from "./Questions";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[current].answer) {
      setCurrent(current + 1);
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const QuizRestart= () => {
    setCurrent(0)
    setScore(0)
    setShowResult(false)
  }

  return (
    <>
      <div className="container mx-auto">
        
        {showResult ? (
          <>
            <h2 className="btn mt-4 text-4xl">
              Your Score : {score} / {questions.length}
            </h2>
            <button className="btn mt-4" onClick={QuizRestart}>Restart</button>
          </>
        ) : (
          <>
            <h3 className="sub-heading">{questions[current].question}</h3>
            {questions[current].options.map((opt, index) => (
              <button
                className="btn mx-4"
                key={index}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
