import axios from 'axios';
import Notiflix from 'notiflix';
import getRefs from './refs';
const { categoryListEl, categoryContainerEl } = getRefs();

categoryListEl.addEventListener('click', renderSelectedBooks);

async function fetchSelectedBooks(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  // Notiflix.Loading.pulse('Please hang on...');
  Notiflix.Loading.dots('Please wait');

  const clickedCategory = e.target.textContent;

  try {
    const { data } = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${clickedCategory}`
    );
    Notiflix.Loading.remove();
    return data;
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Something went wrong. Please try again');
    console.log(error);
  }
}

async function renderPage(selectedBooks) {
  categoryContainerEl.innerHTML = '';
  const data = selectedBooks;
  const selectedBookList = document.createElement('ul');
  try {
    for (const book of data) {
      const selectedBook = document.createElement('li');

      selectedBook.innerHTML = `<img src="${book.book_image}" width="${book.book_image_width}" height="${book.book_image_height}" alt="bookcover of ${book.title}" /><h3>${book.title}</h3><h4>${book.author}</h4>`;
      selectedBookList.appendChild(selectedBook);
    }
    categoryContainerEl.appendChild(selectedBookList);
  } catch (error) {
    console.log(error);
  }
}

async function renderSelectedBooks(e) {
  let selectedBooks;
  const data = await fetchSelectedBooks(e);
  selectedBooks = data;
  renderPage(selectedBooks);
}
