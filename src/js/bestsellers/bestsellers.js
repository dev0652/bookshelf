import getTopBooksArray from './fetchBooks';
import { createBookMarkup } from '../_shared/oneBookMarkup';
import getRefs from '../refs.js';

const { renderingContainer } = getRefs();

// Fetch and render bestsellers:
export async function renderTopBooks() {
  //
  try {
    const data = await getTopBooksArray();

    renderingContainer.innerHTML = '';

    const bestsellerListMarkup = `
      <ul class="category-blocks-list">
        ${data
          .map(
            ({ list_name, books }) => `
              <li class="bestseller-category">
          <h3 class="bestseller-category-title">${list_name}</h3>
          <ul class="books-list">
            ${books
              .map(
                book => `
              <li class="books-list-item bestsellers-book-item">
                ${createBookMarkup(book)}
              </li>
            `
              )
              .join('')}
          </ul>
          <button class="button see-more-btn" id="${list_name}">See more</button>
        </li>
            `
          )
          .join('')}
      </ul>
    `;

    renderingContainer.innerHTML = bestsellerListMarkup;
  } catch (error) {
    console.log(error);
  }
}

renderTopBooks();
