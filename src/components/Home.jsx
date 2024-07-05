import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Quiz App</h1>
      <div className="home">
        <ul>
          <li>
            <Link to="/questions">View Questions</Link>
            <p>You can view questions here</p>
          </li>
          <li>
            <Link to="/add-question">Add Question</Link>
            <p>You can add your question here</p>
          </li>
          <li>
            <Link to="/quizzes">View Quizzes</Link>
            <p>You can view quizzes here that are already generated</p>
          </li>
          <li>
            <Link to="/create-quiz">Create Quiz</Link>
            <p>You can add new quizzes here</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
