import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questions">View Questions</Link>
        </li>
        <li>
          <Link to="/add-question">Add Question</Link>
        </li>
        <li>
          <Link to="/quizzes">View Quizzes</Link>
        </li>
        <li>
          <Link to="/create-quiz">Create Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
