import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizById, submitQuiz } from "../api";
import "../styles/QuizSubmit.css";

const QuizSubmit = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    getQuizById(id)
      .then((response) => {
        setQuestions(response.data);
        setResponses(new Array(response.data.length).fill(""));
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
      });
  }, [id]);

  const handleChange = (e, index) => {
    const newResponses = [...responses];
    newResponses[index] = e.target.value;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedResponses = questions.map((question, index) => ({
      id: question.id,
      response: responses[index],
    }));

    submitQuiz(id, formattedResponses)
      .then((response) => {
        alert(`You got ${response.data} correct answers!`);
      })
      .catch((error) => {
        console.error("Error submitting quiz:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      {questions.map((question, index) => (
        <Question
          key={question.id}
          question={question}
          response={responses[index]}
          handleChange={(e) => handleChange(e, index)}
        />
      ))}
      <button type="submit" className="submit-button">
        Submit Quiz
      </button>
    </form>
  );
};

const Question = ({ question, response, handleChange }) => {
  return (
    <div className="question">
      <h3>{question.questionTitle}</h3>
      <div className="options">
        {[
          question.option1,
          question.option2,
          question.option3,
          question.option4,
        ].map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={response === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizSubmit;
