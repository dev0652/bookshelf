import getTopBooksArray from './fetchBooks';
import { createBookMarkup } from '../_shared/oneBookMarkup';
import getRefs from '../refs.js';

const { renderingContainer } = getRefs();

// Fetch and render bestsellers:
export async function renderTopBooks() {
  let data;
  const savedData = sessionStorage.getItem('bestsellers');

  // Check if there's saved data in sessionStorage...
  if (savedData) {
    data = JSON.parse(savedData);
  } else {
    // ...otherwise fetch data from server
    try {
      data = await getTopBooksArray();
      sessionStorage.setItem('bestsellers', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

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
}

renderTopBooks();
