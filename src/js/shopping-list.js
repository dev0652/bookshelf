'use strict';

const divEl = document.querySelector('.shopping__list');
const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ

// Рендер розмітки книг, які збережені у LS
function renderMarkUp() {
  return shoppingList
    .map(({ title, author, description, list_name }) => {
      return `<article class="shopping__card">
  <div class="div1">
    <img
      class="shopping__card-img"
      src="https://picsum.photos/116/165"
      alt=""
    />
  </div>

  <div class="div2">
    <h3 class="shopping__card-title">${title}</h3>
    <p class="shopping__card-category">${list_name}</p>
  </div>

  <div class="div3">
    <p class="shopping__card-description">${description}</p>
  </div>

  <div class="div4">
    <p class="shopping__card-author">${author}</p>
  </div>

  <div class="div5">
    <ul class="shopping__card-shoplist">
      <li class="store"><a href="">St1</a></li>
      <li class="store"><a href="">St2</a></li>
      <li class="store"><a href="">St3</a></li>
    </ul>
  </div>
  <button class="shopping__card-btn" type="button" data-book-name="${title}"><svg class="icon-trash" width="16" height="16"><use href="./src/images/symbol-defs.svg#icon-chevron"></use></svg>
  </button>
</article>

        `;
    })
    .join('');
}

const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

function isEmpty() {
  if (!shoppingList.length) {
    divEl.innerHTML =
      '<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>';
    return;
  }
  divEl.insertAdjacentHTML('beforeend', renderMarkUp());
}

isEmpty();

// Видалення книги з корзини при натиску на кнопку
const parentEl = document.querySelector('.shopping__list');

parentEl.addEventListener('click', event => {
  if (event.target.classList.contains('shopping__card-btn')) {
    const dataBookName = event.target.getAttribute('data-book-name');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage.title === dataBookName
    );

    shoppingList.splice(bookIndex, 1);
    // Зберігаємо зміни в LocalStorage
    localStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(shoppingList)
    );

    divEl.innerHTML = renderMarkUp();
    if (!shoppingList.length) {
      divEl.innerHTML =
        '<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>';
      return;
    }
  }
});

// --------------------------------------------------/////

// чорновик

// const bookTitleEl = document.getElementById('title');
// const bookAuthorEl = document.getElementById('author');
// const bookDescriptionEl = document.getElementById('description');
// const bookListNameEl = document.getElementById('list_name');
// const bookImageEl = document.getElementById('book_image').getAttribute('src');
// // const bookAmazonUrl = document
// //   .getElementById('shop_Amazon')
// //   .getAttribute('href');
// // const bookAppleUrl = document
// //   .getElementById('apple_Books')
// //   .getAttribute('href');
// // const bookShopUrl = document.getElementById('bookshop').getAttribute('href');

// const book = {
//   title: bookTitleEl.textContent,
//   author: bookAuthorEl.textContent,
//   description: bookDescriptionEl.textContent,
//   list_name: bookListNameEl.textContent,
//   //   book_image: bookImageEl,
//   //   buy_links: [
//   //     {
//   //       amazon: bookAmazonUrl,
//   //       appleBooks: bookAppleUrl,
//   //       bookShop: bookShopUrl,
//   //     },
//   //   ],
// };
// console.log(book);

// // Отримуємо корзину товарів з LocalStorage або створюємо нову, якщо вона ще не існує
// const shoppingList =
//   JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];
// console.log(shoppingList);

// // Функція для додавання товару у корзину
// function addToStorage(book) {
//   // Додаємо товар до корзини
//   shoppingList.push(book);
//   // Зберігаємо зміни в LocalStorage
//   localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(shoppingList));
// }
