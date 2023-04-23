import getRefs from '../refs';
const { categoryListEl, selectedBooksListEl } = getRefs();

import { fetchSelectedBooks } from '../api/fetchSelectedBooks';

import { renderBooksList } from '../books-by-category/renderSelectedCategory';

// Listen to clicks on See More buttons

categoryListEl.addEventListener('click', seeMoreClickHandler);

async function seeMoreClickHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.attributes.id.value;

  const data = await fetchSelectedBooks(id);

  selectedBooksListEl.innerHTML = renderBooksList(data);
}
