
import getRefs from './refs';
const { paginationContainerPages, paginationContainerBackBtn, paginationContainerEndBtn, startButton, previousButton, nextButton, endButton } = getRefs();

import { renderMarkUp } from './shopping-list'; 
// // !скопіював від юри - треба видалити
const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ
const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

// !=======================================

// ! ====== It`s my part working code on shoping list page =========
// number of books per page in shoping list
const pageSize = 3;
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

export function activDisplayNoneOnElement(element) {
  element.style.display = "none";
};
