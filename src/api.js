import axios from "axios";

const API_URL = "http://localhost:8080";

export const fetchAllQuestions = () =>
  axios.get(`${API_URL}/question/allQuestions`);
export const addQuestion = (question) =>
  axios.post(`${API_URL}/question/add, question`);
export const deleteQuestion = (id) =>
  axios.delete(`${API_URL}/question/delete/${id}`);
export const updateQuestion = (id, question) =>
  axios.put(`${API_URL}/question/update/${id}`, question);

export const createQuiz = (category, numQ, title) =>
  axios.post(`${API_URL}/quiz/create`, null, {
    params: { category, numQ, title },
  });
export const getQuizById = (id) => axios.get(`${API_URL}/quiz/get/${id}`);
export const submitQuiz = (id, responses) =>
  axios.post(`${API_URL}/quiz/submit/${id}`, responses);
export const getQuizzes = () => axios.get(`${API_URL}/quiz/allQuizzes`);
