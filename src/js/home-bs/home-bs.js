import fetchBooks from './fetchBooks.js';
import { createBookMarkup } from './markupBook.js';

const booksListFirstEl = document.querySelector('.books-list__first');
const booksListSecEl = document.querySelector('.books-list__second');
const booksListThirdEl = document.querySelector('.books-list__third');
const booksListFourthEl = document.querySelector('.books-list__fourth');

fetchBooks()
  .then(data => {
    data.map(category => {
      // console.log(category);

      if (category.list_name === 'Combined Print and E-Book Fiction') {
        return (booksListFirstEl.innerHTML += createBookMarkup(category.books));
      } else if (
        category.list_name === 'Combined Print and E-Book Nonfiction'
      ) {
        return (booksListSecEl.innerHTML += createBookMarkup(category.books));
      } else if (category.list_name === 'Hardcover Fiction') {
        return (booksListThirdEl.innerHTML += createBookMarkup(category.books));
      } else if (category.list_name === 'Hardcover Nonfiction') {
        return (booksListFourthEl.innerHTML += createBookMarkup(
          category.books
        ));
      }
    });
  })
  .catch(err => {
    console.log(err);
  });
