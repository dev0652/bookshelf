import axios from 'axios';
import getRefs from './refs';

const { categoryListEl } = getRefs();

const categoriesArray = async () => {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

async function renderCategories() {
  try {
    const array = await categoriesArray();
    const inAlphabeticalOrder = array.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );

    for (const arr of inAlphabeticalOrder) {
      catBtn = document.createElement('button');
      catBtn.classList.add('category-btn');
      catBtn.textContent = `${arr.list_name}`;
      categoryListEl.appendChild(catBtn);
    }
  } catch (error) {
    console.log(error);
  }
}

renderCategories();
