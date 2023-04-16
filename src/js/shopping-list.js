'use strict';
// ! Стас виніс твою змінну divEl до загального файлу refs.js для зручності, так як зможе у подальшому деструктуризувати її у своєму файлі і використовувати у своїх функціях
// const divEl = document.querySelector('.shopping__list');
import getRefs from './refs';

const { divEl, paginationContainerPages, paginationContainerBackBtn, paginationContainerEndBtn, startButton, previousButton, nextButton, endButton } = getRefs();

const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ

// Рендер розмітки книг, які збережені у LS
//!  Стас тут змінив функцію щоб вона приймала масив для рендеру, тому що при перемиканні сторінок, динамічно змінюється частина масиву, який у подальшому буде рендеритись

function renderMarkUp(array) {
  return array.map(({ title, author, description, list_name }) => {
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
};

const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

function isEmpty() {
  if (!shoppingList.length) {
    divEl.innerHTML =
      '<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>';
    return;
  }
  divEl.insertAdjacentHTML('beforeend', renderMarkUp(shoppingList));
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

    divEl.innerHTML = renderMarkUp(shoppingList);
    if (!shoppingList.length) {
      // ! Ця частина коду проводить видалення розмітки кнопок пагінації
      activDisplayNoneOnElement(paginationContainerBackBtn);
      activDisplayNoneOnElement(paginationContainerEndBtn);
      paginationContainerPages.innerHTML = "";

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
// .getElementById('apple_Books')
// .getAttribute('href');
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


/* paginations-slider for rendering books */
// const paginationsSlider = document.querySelector(".paginations-slider");

// container for created buttons paginations
// const paginationContainerPages = document.querySelector(".paginations__container-pages");
// const paginationContainerBackBtn = document.querySelector(".paginations__container-back");
// const paginationContainerEndBtn = document.querySelector(".paginations__container-end");

// buttons paginations
// const startButton = document.querySelector("button[name='startButton']");
// const previousButton = document.querySelector("button[name='previousButton']");
// const nextButton = document.querySelector("button[name='nextButton']");
// const endButton = document.querySelector("button[name='endButton']");


// !||||||||||||||||||Paginations||||||||||||||||||||||||||||

// number of books per page in shoping list
const pageSize = 2;
// all pages shoping list
let totalPages = Math.ceil(shoppingList.length / pageSize);
// current page, (changing after click on button paginations) 
let currentPage = 1;
// console.log(currentPage);
// start index for slice method
let startIndex = (currentPage - 1) * pageSize;
// end index for slice method
let endIndex = startIndex + pageSize;
// slicing an array of objects to create a single page
let itemsOnPage = shoppingList.slice(startIndex, endIndex);
// console.log(itemsOnPage);

// creating books on the page
renderMarkUp(itemsOnPage);

// creating buttons paginations if shoping list has more three books
for (let i = 1; i <= totalPages; i++) {
  //   if (shoppingList.length <= 3) {
  //     return;
  // };

    const pageNumber = i;
    // creating button paginations
    const button = document.createElement('button');
    // creating class button
    button.classList.add("paginations__btn");
    button.classList.add("paginations__btn--pages");
    // creating number button
    button.textContent = i;
    
    activDisplayFlexOnElement(paginationContainerBackBtn);
    activDisplayFlexOnElement(paginationContainerEndBtn);
    
    // event for rendering book after click on button
    button.addEventListener('click', () => {
      currentPage = pageNumber;
      console.log(currentPage)
    // delete markup books before creating new murkup 
      deleteMurkup();
      createNewBooks();
      removeDisableforElement(startButton);
      removeDisableforElement(endButton);
    });
    // add button after cteated  
    paginationContainerPages.appendChild(button);
};

// handler for previous Button 
previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    deleteMurkup();
    createNewBooks();
    removeDisableforElement(endButton);
  }
});
// handler for next Button 
nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    deleteMurkup();
    createNewBooks();
    removeDisableforElement(startButton);
  }
});
// handler for start Button
startButton.addEventListener('click', () => {
  currentPage = 1;
  deleteMurkup();
  createNewBooks();
  addDisableforElement(startButton);
  removeDisableforElement(endButton);
});

// handler for end Button 
endButton.addEventListener('click', () => {
  currentPage = totalPages;
  deleteMurkup();
  createNewBooks();
  addDisableforElement(endButton);
  removeDisableforElement(startButton);
});

// this function delete markup shoping list before new render 
function deleteMurkup() {
  divEl.innerHTML = "";
}

// this function slice array books and created new array books by next render
function sliceArrayBooks() {
  startIndex = (currentPage - 1) * pageSize;
  endIndex = startIndex + pageSize;
  return shoppingList.slice(startIndex, endIndex);
};

function createNewBooks() {
  renderMarkUp(sliceArrayBooks());
};

function removeDisableforElement(element) {
  element.disabled = false;
};

function addDisableforElement(element) {
  element.disabled = true;
};

function activDisplayFlexOnElement(element) {
  element.style.display = "flex";
};

function activDisplayNoneOnElement(element) {
  element.style.display = "none";
};