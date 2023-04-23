import getRefs from '../refs';
import { renderTopBooks } from '../bestsellers/bestsellers';

const { allCategoriesBtn, selectedBooksListEl, titleEl } = getRefs();

allCategoriesBtn.addEventListener('click', handleAllCategoriesClick);

async function handleAllCategoriesClick(e) {
  e.preventDefault();
  titleEl.innerHTML = `Best Seller <span class="content-part-title--last-word-static">Books</span>`;
  selectedBooksListEl.innerHTML = '';
  await renderTopBooks();
}
