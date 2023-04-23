import getRefs from '../refs';
const { renderingContainer } = getRefs();

import { makeCategoryBooksMarkup } from '../books-by-category/allBooksMarkup';

// Render content for an individual category of books
export function renderBooksByCategory(data) {
  const markup = makeCategoryBooksMarkup(data);

  renderingContainer.innerHTML = markup;
}
