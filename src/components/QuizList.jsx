import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuizzes } from "../api";
import "../styles/QuizList.css";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes()
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
      });
  }, []);

  return (
    <div>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
