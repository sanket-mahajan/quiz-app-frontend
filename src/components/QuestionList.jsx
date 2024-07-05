import React, { useEffect, useState } from "react";
import { fetchAllQuestions, deleteQuestion } from "../api";
import "../styles/QuestionList.css";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchAllQuestions()
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleDelete = (id) => {
    deleteQuestion(id)
      .then(() => {
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  };

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.length > 0 ? (
          questions.map((question) => (
            <li key={question.id}>
              {question.questionTitle}{" "}
              <button onClick={() => handleDelete(question.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No questions available.</p>
        )}
      </ul>
    </div>
  );
};

export default QuestionList;
