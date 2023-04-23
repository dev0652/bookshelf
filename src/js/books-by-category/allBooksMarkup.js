import { createBookMarkup } from '../_shared/oneBookMarkup';

// Create markup of all books in a selected category
export function makeCategoryBooksMarkup(data) {
  return `
      <ul class="category-books-list">
        ${data
          .map(element => {
            return `
            <li class="books-list-item">
              ${createBookMarkup(element)}
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
}
