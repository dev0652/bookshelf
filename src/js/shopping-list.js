import getRefs from './refs.js';

const {
  divEl,
  paginationContainerPages,
  paginationContainerBackBtn,
  paginationContainerEndBtn,
  startButton,
  previousButton,
  nextButton,
  endButton,
} = getRefs();

const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ
const pictureOfBooks = new URL('../images/shoppingbook1.png', import.meta.url)
  .href;
const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

// !===============Paginagions variables=================
// !=====================================================
const pageSize = 3;
let totalPages = Math.ceil(shoppingList.length / pageSize);
let currentPage = 1;
let startIndex = (currentPage - 1) * pageSize;
let endIndex = startIndex + pageSize;
let itemsOnPage = shoppingList.slice(startIndex, endIndex);

// Рендер розмітки книг, які збережені у LS
function renderMarkUp(itemsOnPage) {
  const appleBooksIcon = new URL(
    '../images/shops/apple-books.png',
    import.meta.url
  ).href;
  const bookShopIcon = new URL('../images/shops/book-shop.png', import.meta.url)
    .href;
  const amazonIcon = new URL('../images/shops/amazon.png', import.meta.url)
    .href;

  return itemsOnPage
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
      <li class="store"><a "modal-shop-img" href="${amazon_product_url}" target="_blank"><img class="modal-shop-img shopping-shopimg amazon" src="${amazonIcon}" alt="Amazon"/>
              </a></li>
      <li class="store"><a "modal-shop-img" href="${apple.url}" target="_blank"><img class="modal-shop-img shopping-shopimg apple" src="${appleBooksIcon}" alt="Apple" /></a></li>
      <li class="store"><a "modal-shop-img" href="${bookshop.url}" target="_blank"><img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIcon}" alt="Book"/></a></li>
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
  if (!shoppingList.length) {
    divEl.innerHTML = `<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${pictureOfBooks}" alt="Shop is Empty"></div >`;
    return;
  }
  divEl.insertAdjacentHTML('beforeend', renderMarkUp(itemsOnPage));
}

isEmpty();

// Видалення книги з корзини при натиску на кнопку
divEl.addEventListener('click', event => {
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

    if (!shoppingList.length) {
      divEl.innerHTML = `<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${pictureOfBooks}" alt="Shop is Empty"></div >`;
      return;
    } else {
      divEl.innerHTML = renderMarkUp(sliceArrayBooks());
      destoyChildElemente(paginationContainerPages);
      checkingArrayBooks();
    }
  }
});

// !=====================Paginations==========================
// !==========================================================
for (let i = 1; i <= totalPages; i++) {
  if (shoppingList.length <= 3) {
    return;
  }

  const pageNumber = i;
  // creating button paginations
  const button = document.createElement('button');
  // creating class button
  button.classList.add('paginations__btn');
  button.classList.add('paginations__btn--pages');
  // creating number button
  button.textContent = i;

  activDisplayFlexOnElement(paginationContainerBackBtn);
  activDisplayFlexOnElement(paginationContainerEndBtn);

  // event for rendering book after click on button
  button.addEventListener('click', () => {
    currentPage = pageNumber;
    deleteMurkup();
    createNewBooks();
    removeDisableforElement(startButton);
    removeDisableforElement(endButton);
  });
  // add button after cteated
  paginationContainerPages.appendChild(button);
}

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

// !==================functionsPaginations====================
// !==========================================================

function deleteMurkup() {
  divEl.innerHTML = '';
}

function sliceArrayBooks() {
  startIndex = (currentPage - 1) * pageSize;
  endIndex = startIndex + pageSize;
  return shoppingList.slice(startIndex, endIndex);
}

function createNewBooks() {
  divEl.insertAdjacentHTML('beforeend', renderMarkUp(sliceArrayBooks()));
}

function removeDisableforElement(element) {
  element.disabled = false;
}

function addDisableforElement(element) {
  element.disabled = true;
}

function activDisplayFlexOnElement(element) {
  element.style.display = 'flex';
}

function activDisplayNoneOnElement(element) {
  element.style.display = 'none';
}

function destoyChildElemente(element) {
  const a = shoppingList.length / pageSize;
  if (Math.round(a) === a) {
    return element.lastElementChild.remove();
  } else {
    return;
  }
}

function checkingArrayBooks() {
  if (shoppingList.length <= 3) {
    activDisplayNoneOnElement(paginationContainerBackBtn);
    activDisplayNoneOnElement(paginationContainerEndBtn);
    paginationContainerPages.innerHTML = '';
  }
}
