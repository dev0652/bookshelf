import getRefs from '../refs';
const { categoryListEl, selectedBooksListEl } = getRefs();

import { fetchSelectedBooks } from '../api/fetchSelectedBooks';

import { renderBooksList } from '../books-by-category/renderSelectedCategory';

categoryListEl.addEventListener('click', renderSelectedBooks);

async function renderSelectedBooks(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.attributes.id.value;

  const data = await fetchSelectedBooks(id);

  selectedBooksListEl.innerHTML = renderBooksList(data);
}
