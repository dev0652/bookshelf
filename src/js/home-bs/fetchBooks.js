import axios from 'axios';
import Notiflix from 'notiflix';

export default async function getTopBooksArray() {
  // Notiflix.Loading.pulse('Please hang on...');

  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    Notiflix.Loading.remove();

    return data;
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somethign went wrong. Please try again');
    console.log(error);
  }
}
