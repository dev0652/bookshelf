'use strict';

import getRefs from './refs.js';
const refs = getRefs();

const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ

const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

// Рендер розмітки книг, які збережені у LS
function renderMarkUp() {
  const appleBooksIcon = new URL(
    '../images/shops/apple-books.png',
    import.meta.url
  ).href;
  const bookShopIcon = new URL('../images/shops/book-shop.png', import.meta.url)
    .href;
  const amazonIcon = new URL('../images/shops/amazon.png', import.meta.url)
    .href;

  return shoppingList
    .map(
      ({
        _id,
        title,
        author,
        description,
        list_name,
        book_image,
        amazon_product_url,
        buy_links: [apple, bookshop],
      }) => {
        return `<article class="shopping__card">
  <div class="grid-img">
    <img
      class="shopping__card-img"
      src="${book_image}"
      alt="${title}"
    />
  </div>

  <div class="grid-title">
    <h3 class="shopping__card-title">${title}</h3>
    <p class="shopping__card-category">${list_name}</p>
  </div>

  <div class="grid-description">
    <p class="shopping__card-description">${description}</p>
  </div>

  <div class="grid-author">
    <p class="shopping__card-author">${author}</p>
  </div>

  <div class="grid-shoplist">
    <ul class="shopping__card-shoplist">
      <li class="store"><a "modal-shop-img" href="${amazon_product_url}" target="_blank"><img src="${amazonIcon}" alt="Amazon"/>
              </a></li>
      <li class="store"><a "modal-shop-img" href="${apple.url}" target="_blank"><img class="modal-shop-img apple" src="${appleBooksIcon}" alt="Apple" /></a></li>
      <li class="store"><a "modal-shop-img" href="${bookshop.url}" target="_blank"><img class="modal-shop-img" src="${bookShopIcon}" alt="Book"/></a></li>
    </ul>
  </div>
  <button class="shopping__card-btn" type="button" data-book-id="${_id}"><svg class="icon-trash" data-book-id="${_id}" width="17" height="17"><use href="/symbol-defs.a8b2e413.svg#icon-trash"></use></svg>
  </button>
</article>

        `;
      }
    )
    .join('');
}

function isEmpty() {
  const pictureOfBooks = new URL('../images/shoppingbook1.png', import.meta.url)
    .href;

  if (!shoppingList.length) {
    refs.divEl.innerHTML = `<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${pictureOfBooks}" alt="Shop is Empty"></div >`;
    return;
  }
  refs.divEl.insertAdjacentHTML('beforeend', renderMarkUp());
}

isEmpty();

// Видалення книги з корзини при натиску на кнопку
refs.divEl.addEventListener('click', event => {
  if (event.target.closest('.shopping__card-btn')) {
    const BookID = event.target.getAttribute('data-book-id');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === BookID
    );

    shoppingList.splice(bookIndex, 1);
    // Зберігаємо зміни в LocalStorage
    localStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(shoppingList)
    );

    refs.divEl.innerHTML = renderMarkUp();
    if (!shoppingList.length) {
      refs.divEl.innerHTML =
        '<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>';
      return;
    }
  }
});
