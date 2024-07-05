import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QuestionList from "./components/QuestionList";
import QuestionForm from "./components/QuestionForm";
import QuizList from "./components/QuizList";
import QuizForm from "./components/QuizForm";
import QuizSubmit from "./components/QuizSubmit";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<QuestionList />} />
          <Route path="/add-question" element={<QuestionForm />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/create-quiz" element={<QuizForm />} />
          <Route path="/quiz/:id" element={<QuizSubmit />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
