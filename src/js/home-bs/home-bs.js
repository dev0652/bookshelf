import getTopBooksArray from './fetchBooks';
import { createBookMarkup } from './markupBook.js';
import getRefs from '../refs';

const { categoryContainerEl } = getRefs();

export async function renderTopBooks() {
  try {
    const data = await getTopBooksArray();

    const categoryTop = document.createElement('ul');

    for (const element of data) {
      const categoryItem = document.createElement('li');
      categoryItem.classList.add('home-category');

      const categoryTitel = document.createElement('h2');
      categoryTitel.classList.add('home-category-title');
      categoryItem.appendChild(categoryTitel);
      categoryTitel.innerText = element.list_name;

      categoryTop.appendChild(categoryItem);

      const bestSellers = document.createElement('ul');
      bestSellers.classList.add('books-list');

      for (const book of element.books) {
        const bestBook = document.createElement('li');
        bestBook.classList.add('book-item');
        bestBook.innerHTML = createBookMarkup(book);

        bestSellers.appendChild(bestBook);
        categoryItem.appendChild(bestSellers);
      }

      const buttonEl = document.createElement('button');
      buttonEl.classList.add('button');
      buttonEl.classList.add('see-more-btn');
      buttonEl.innerText = 'See more';

      categoryItem.appendChild(buttonEl);
    }

    categoryContainerEl.appendChild(categoryTop);
  } catch (error) {
    console.log(error);
  }
}

renderTopBooks();