# Quiz App Frontend

This is the frontend part of the Quiz App, built with React. The application allows users to view, add, and manage quizzes and questions.

## Features

- View questions
- Add new questions
- Delete questions
- Update questions
- Create quizzes
- Submit quizzes and view results

## Technologies Used

- React
- React Router
- Axios

## API Integration

The frontend communicates with a backend API to fetch and manage quiz data. The base URL for the API is configured in src/api/api.js.

### Example API Methods

- fetchAllQuestions()
- addQuestion(question)
- deleteQuestion(id)
- updateQuestion(id, question)
- createQuiz(category, numQ, title)
- getQuizById(id)
- submitQuiz(id, responses)
- getQuizzes()
