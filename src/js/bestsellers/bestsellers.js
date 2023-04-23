import getTopBooksArray from './fetchBooks';
import { createBookMarkup } from './markupBook';
import getRefs from '../refs.js';

const { selectedBooksListEl } = getRefs();

export async function renderTopBooks() {
  try {
    const data = await getTopBooksArray();
    selectedBooksListEl.innerHTML = '';

    for (const element of data) {
      const categoryItem = `
        <li class="bestseller-category">
          <h2 class="bestseller-category-title">${element.list_name}</h2>
          <ul class="books-list">
            ${element.books
              .map(
                book => `
              <li class="book-item">
                ${createBookMarkup(book)}
              </li>
            `
              )
              .join('')}
          </ul>
          <button class="button see-more-btn" id="${
            element.list_name
          }">See more</button>
        </li>
      `;
      selectedBooksListEl.insertAdjacentHTML('beforeend', categoryItem);
    }
  } catch (error) {
    console.log(error);
  }
}

renderTopBooks();
