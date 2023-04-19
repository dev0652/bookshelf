import axios from 'axios';
import Notiflix from 'notiflix';
import getRefs from './refs';
import { createBookMarkup } from './home-bs/markupBook';
const { categoryListEl, categoryContainerEl } = getRefs();

categoryListEl.addEventListener('click', renderSelectedBooks);

async function fetchSelectedBooks(e) {
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
  selectedBookList.classList.add('books-list-cat')
  try {
    for (const book of data) {
      const selectedBook = document.createElement('li');
      selectedBook.classList.add('book-item');

      // selectedBook.innerHTML = `<img class="book-image" 
      //                           src="${book.book_image}"
      //                           width="${book.book_image_width}" 
      //                           height="${book.book_image_height}" 
      //                           alt="bookcover of ${book.title}" />
      //                             <h3 class="book-title">${book.title}</h3>
      //                             <h4 class="book-author">${book.author}</h4>`;
      selectedBook.innerHTML = createBookMarkup(book);
      selectedBookList.appendChild(selectedBook);
    }
    categoryContainerEl.appendChild(selectedBookList);
  } catch (error) {
    console.log(error);
  }
}

async function renderSelectedBooks(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  let selectedBooks;
  const data = await fetchSelectedBooks(e);
  selectedBooks = data;
  renderPage(selectedBooks);
}
