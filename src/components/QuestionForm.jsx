import React, { useState } from "react";
import { addQuestion } from "../api";
import "../styles/QuestionForm.css";

const QuestionForm = () => {
  const [question, setQuestion] = useState({
    questionTitle: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
    difficultyLevel: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion(question)
      .then((response) => {
        console.log("Question added:", response.data);
        setQuestion({
          questionTitle: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          rightAnswer: "",
          difficultyLevel: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error("Error adding question:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="questionTitle"
        value={question.questionTitle}
        onChange={handleChange}
        placeholder="Question Title"
      />
      <input
        type="text"
        name="option1"
        value={question.option1}
        onChange={handleChange}
        placeholder="Option 1"
      />
      <input
        type="text"
        name="option2"
        value={question.option2}
        onChange={handleChange}
        placeholder="Option 2"
      />
      <input
        type="text"
        name="option3"
        value={question.option3}
        onChange={handleChange}
        placeholder="Option 3"
      />
      <input
        type="text"
        name="option4"
        value={question.option4}
        onChange={handleChange}
        placeholder="Option 4"
      />
      <input
        type="text"
        name="rightAnswer"
        value={question.rightAnswer}
        onChange={handleChange}
        placeholder="Right Answer"
      />
      <input
        type="text"
        name="difficultyLevel"
        value={question.difficultyLevel}
        onChange={handleChange}
        placeholder="Difficulty Level"
      />
      <input
        type="text"
        name="category"
        value={question.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
