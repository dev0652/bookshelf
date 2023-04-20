import axios from 'axios';
import Notiflix from 'notiflix';

export async function fetchSelectedBooks(category) {
  // Notiflix.Loading.pulse('Please hang on...');
  Notiflix.Loading.dots('Please wait');

  try {
    const { data } = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    Notiflix.Loading.remove();
    return data;
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Something went wrong. Please try again');
    console.log(error);
  }
}
