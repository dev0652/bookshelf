
// // import getRefs from './refs';
// // const { paginationContainerPages, paginationContainerBackBtn, paginationContainerEndBtn, startButton, previousButton, nextButton, endButton } = getRefs();

// // import { renderMarkUp } from './shopping-list'; 
// // // !скопіював від юри - треба видалити
// // const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ
// // const shoppingList =
// //   JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

// // !=======================================

// // ! ====== It`s my part working code on shoping list page =========
// const pageSize = 3;
// let totalPages = Math.ceil(shoppingList.length / pageSize);
// let currentPage = 1;
// // console.log(currentPage);
// let startIndex = (currentPage - 1) * pageSize;
// let endIndex = startIndex + pageSize;
// let itemsOnPage = shoppingList.slice(startIndex, endIndex);
// // console.log(itemsOnPage);

// // // creating books on the page
// // renderMarkUp(itemsOnPage);

// // creating buttons paginations if shoping list has more three books
// for (let i = 1; i <= totalPages; i++) {
//   //   if (shoppingList.length <= 3) {
//   //     return;
//   // };

//     const pageNumber = i;
//     // creating button paginations
//     const button = document.createElement('button');
//     // creating class button
//     button.classList.add("paginations__btn");
//     button.classList.add("paginations__btn--pages");
//     // creating number button
//     button.textContent = i;
    
//     activDisplayFlexOnElement(paginationContainerBackBtn);
//     activDisplayFlexOnElement(paginationContainerEndBtn);
    
//     // event for rendering book after click on button
//     button.addEventListener('click', () => {
//       currentPage = pageNumber;
//       console.log(currentPage)
//     // delete markup books before creating new murkup
//       deleteMurkup();
//       createNewBooks();
//       removeDisableforElement(startButton);
//       removeDisableforElement(endButton);
//     });
//     // add button after cteated
//     paginationContainerPages.appendChild(button);
// };

// // handler for previous Button
// previousButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     deleteMurkup();
//     createNewBooks();
//     removeDisableforElement(endButton);
//   }
// });
// // handler for next Button
// nextButton.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     deleteMurkup();
//     createNewBooks();
//     removeDisableforElement(startButton);
//   }
// });
// // handler for start Button
// startButton.addEventListener('click', () => {
//   currentPage = 1;
//   deleteMurkup();
//   createNewBooks();
//   addDisableforElement(startButton);
//   removeDisableforElement(endButton);
// });

// // handler for end Button
// endButton.addEventListener('click', () => {
//   currentPage = totalPages;
//   deleteMurkup();
//   createNewBooks();
//   addDisableforElement(endButton);
//   removeDisableforElement(startButton);
// });

// // this function delete markup shoping list before new render
// export function deleteMurkup() {
//   divEl.innerHTML = "";
// }

// // this function slice array books and created new array books by next render
// export function sliceArrayBooks() {
//   startIndex = (currentPage - 1) * pageSize;
//   endIndex = startIndex + pageSize;
//   return shoppingList.slice(startIndex, endIndex);
// };

// export function createNewBooks() {
//   divEl.insertAdjacentHTML('beforeend', renderMarkUp(sliceArrayBooks()));
// };

// export function removeDisableforElement(element) {
//   element.disabled = false;
// };

// export function addDisableforElement(element) {
//   element.disabled = true;
// };

// export function activDisplayFlexOnElement(element) {
//   element.style.display = "flex";
// };

// export function activDisplayNoneOnElement(element) {
//   element.style.display = "none";
// };

