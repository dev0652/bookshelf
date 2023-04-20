import { fetchSelectedBooks } from './fetchSelectedBooks';
import { renderPage } from './renderSelectedCategory';

import getRefs from './refs';
const { categoryListEl, selectedBooksListEl } = getRefs();

categoryListEl.addEventListener('click', renderSelectedBooks);

async function renderSelectedBooks(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.attributes.id.value;

  const data = await fetchSelectedBooks(id);

  selectedBooksListEl.insertAdjacentHTML('beforeend', renderPage(data));
}
