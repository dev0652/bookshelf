import axios from 'axios';

export default async function getTopBooksArray() {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
