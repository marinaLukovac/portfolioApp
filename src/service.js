import axios from 'axios';

export const getBookByIsbn = (id) =>
  axios.get(`https://api.itbook.store/1.0/books/${id}`);

export const getAllBooks = () =>
  axios.get('https://el-bookstore-app.herokuapp.com/books');

export const getAllUsers = () =>
  axios.get('https://el-bookstore-app.herokuapp.com/users');

export const addNewUser = (user) =>
  axios.post('https://el-bookstore-app.herokuapp.com/users', user);

export const addNewBook = (book) =>
  axios.post('https://el-bookstore-app.herokuapp.com/books', book);

export const deleteBookById = (id) => {
  return axios.delete(`https://el-bookstore-app.herokuapp.com/books/${id}`);
};
export const editBookById = (id, changedBook) => {
  return axios.put(
    `https://el-bookstore-app.herokuapp.com/books/${id}`,
    changedBook
  );
};
