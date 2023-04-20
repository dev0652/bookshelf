import axios from 'axios';
import getRefs from './refs';

const { categoryListEl } = getRefs();

async function categoriesArray() {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function renderCategories() {
  try {
    const array = await categoriesArray();
    const inAlphabeticalOrder = array.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );

    for (const arr of inAlphabeticalOrder) {
      const listItem = document.createElement('li');
      const catBtn = document.createElement('button');
      catBtn.classList.add('category-btn');
      catBtn.textContent = `${arr.list_name}`;
      catBtn.setAttribute('id', arr.list_name);
      categoryListEl.appendChild(listItem);
      listItem.appendChild(catBtn);
    }
  } catch (error) {
    console.log(error);
  }
}

renderCategories();
