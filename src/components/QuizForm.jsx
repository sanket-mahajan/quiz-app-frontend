import React, { useState } from "react";
import { createQuiz } from "../api";
import "../styles/QuizForm.css";

const QuizForm = () => {
  const [category, setCategory] = useState("");
  const [numQ, setNumQ] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuiz(category, numQ, title)
      .then((response) => {
        console.log("Quiz created:", response.data);
        setCategory("");
        setNumQ("");
        setTitle("");
      })
      .catch((error) => {
        console.error("Error creating quiz:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={numQ}
        onChange={(e) => setNumQ(e.target.value)}
        placeholder="Number of Questions"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Quiz Title"
      />
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default QuizForm;
