import axios from 'axios';

axios.defaults.baseURL = `https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app`;

export const postShoppingList = async book => {
  const uid = localStorage.getItem('uid');
  const parseUid = await JSON.parse(uid);
  const token = localStorage.getItem('token');
  const parsedToken = await JSON.parse(token);
  if (!parsedToken) {
    return;
  }
  const response = await axios.post(
    `${parseUid}.json?auth=${parsedToken}`,
    book
  );
  return response.data;
};

export const getShoppingList = async () => {
  const uid = localStorage.getItem('uid');
  const parseUid = await JSON.parse(uid);
  const token = localStorage.getItem('token');
  const parsedToken = await JSON.parse(token);
  if (!parsedToken) {
    return;
  }
  const response = await axios.get(`${parseUid}.json?auth=${parsedToken}`);
  return response.data;
};

export const deleteBookShoping = async () => {
  const uid = localStorage.getItem('uid');
  const parseUid = await JSON.parse(uid);
  const token = localStorage.getItem('token');
  const parsedToken = await JSON.parse(token);
  if (!parsedToken) {
    return;
  }
  const response = await axios.delete(`${parseUid}.json?auth=${parsedToken}`);
  if (!response) {
    return `<div>Loading...</div>`;
  }
  return response.data;
};
