import axios from 'axios';
import getRefs from './refs';

const { allCategoriesBtn } = getRefs();
allCategoriesBtn.addEventListener('click', renderTopBooks);

const topBooksListEl = document.querySelector('.topbooks');

export async function getTopBooksArray() {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function renderTopBooks() {
  try {
    const data = await getTopBooksArray();

    const categoryTop = document.createElement('ul');

    for (const element of data) {
      const categoryTitle = document.createElement('li');
      categoryTitle.innerText = element.list_name;
      categoryTop.appendChild(categoryTitle);

      const bestSellers = document.createElement('ul');
      for (const book of element.books) {
        const bestBook = document.createElement('li');
        bestBook.innerHTML = `<img src="${
          book.book_image
        }" width="${`book.book_image_width`}" height="${
          book.book_image_height
        }" alt="bookcover" /><h3>${book.title}</h3><h4>${book.author}</h4>`;
        bestSellers.appendChild(bestBook);
        categoryTitle.appendChild(bestSellers);
      }
    }

    topBooksListEl.appendChild(categoryTop);
  } catch (error) {
    console.log(error);
  }
}
