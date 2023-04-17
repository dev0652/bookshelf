import { title } from 'process';
import { renderTopBooks } from './home-bs/home-bs';
import getRefs from './refs';

const { allCategoriesBtn, categoryContainerEl, titleEl } = getRefs();

allCategoriesBtn.addEventListener('click', handleAllCategoriesClick);

async function handleAllCategoriesClick(e) {
  e.preventDefault();
  titleEl.innerHTML = `Best Sellers <span class="home-bs__title-part">Books</span>`;
  categoryContainerEl.innerHTML = '';
  await renderTopBooks();
}
