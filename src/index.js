import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import Markup from './templates/paginations.hbs';

// ##################################################################

const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################


const arrPeoples = [
    { name: "John", age: 30, address: { city: "New York", state: "NY" } },
    { name: "Jane", age: 25, address: { city: "Los Angeles", state: "CA" } },
    { name: "Bob", age: 40, address: { city: "Chicago", state: "IL" } },
    { name: "Mike", age: 27, address: { city: "Boston", state: "MA" } },
    { name: "Linda", age: 33, address: { city: "San Francisco", state: "CA" } },
    { name: "David", age: 45, address: { city: "Houston", state: "TX" } },
    { name: "Emily", age: 22, address: { city: "Seattle", state: "WA" } },
    { name: "Max", age: 50, address: { city: "Miami", state: "FL" } },
    { name: "Samantha", age: 29, address: { city: "Denver", state: "CO" } }
];

const paginationsSlider = document.querySelector(".paginations-slider");
const paginationContainer = document.querySelector('.paginations-container');


const pageSize = 3;
let totalPages = Math.ceil(arrPeoples.length / pageSize);
let currentPage = 1;
console.log(currentPage);
let startIndex = (currentPage - 1) * pageSize;
let endIndex = startIndex + pageSize;
let itemsOnPage = arrPeoples.slice(startIndex, endIndex);
console.log(itemsOnPage);

itemsOnPage.forEach((item) => {
  renderMarkup(item);
});



for (let i = 1; i <= totalPages; i++) {
  const pageNumber = i;
  const button = document.createElement('button');
  button.textContent = i;

  button.addEventListener('click', () => {
    currentPage = pageNumber;
      paginationsSlider.innerHTML = "";

    console.log(pageNumber)
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    itemsOnPage = arrPeoples.slice(startIndex, endIndex);
    itemsOnPage.forEach((item) => {
      renderMarkup(item);
    });
  });
  paginationContainer.appendChild(button);
};

// const previousButton = document.createElement('button');
// previousButton.textContent = 'Previous';
// previousButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderItems();
//   }
// });
// paginationContainer.prepend(previousButton);

// const nextButton = document.createElement('button');
// nextButton.textContent = 'Next';
// nextButton.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     renderItems();
//   }
// });
// paginationContainer.appendChild(nextButton);







function renderMarkup(x) {
    paginationsSlider.insertAdjacentHTML("beforeend", Markup(x));
};





// //! виймаю збережені у локал сторейдж дані
// // const shoppingList = JSON.parse(localStorage.getItem('ShopList'));

// // кількість елементів на сторінці
// const pageSize = 2;
// let currentPage = 1;

// // загальна к-сть сторінок
// const totalPages = Math.ceil(ShopList.length / pageSize);

// /* функція, яка повертає масив з певною к-стю об'єктів для 
// подальшого створення розмітки*/  
// function returnPageArray(x) {
//     let pageNum = x;
//     let startIndex = (pageNum - 1) * pageSize;
//     let endIndex = startIndex + pageSize;
//     let itemsOnPage = ShopList.slice(startIndex, endIndex);
//     return itemsOnPage;
// };


// // функція рендеру розмітки 
// function renderMarkup(x) {
//     const div = document.querySelector(".paginations-slider");
//     div.insertAdjacentHTML("beforeend", Markup(x));
// };

// // перебор масиву з подальшим рендигом
// returnPageArray(2)
//     .forEach((x) => {
//     renderMarkup(x);
//     console.log(x);
// });

// // btn paginations
// const paginationContainer = document.querySelector('.paginations-container');

// // цикл автоматичного створення кнопок для перегортання сторінок 
// for (let i = 1; i <= totalPages; i++) {
//   const button = document.createElement('button');
//     button.textContent = i;
    
//     // створення слухача з хендлером
//   button.addEventListener('click', () => {
//     currentPage = i;
//     console.log(i);
    
//     //   видаляємо розмітку перед рендингом

//       document.querySelector(".paginations-slider").innerHTML = "";
    
//       // рендерим сторінку з розміткою після кліку на кнопку
//       let page = returnPageArray(i);
//       page.forEach((x) => {
//           renderMarkup(x);
          
//     });
//   });
//   paginationContainer.appendChild(button);
// };

// console.log(currentPage);

// const previousButton = document.createElement('button');
// console.log(previousButton)
// previousButton.textContent = 'Previous';

// previousButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     // currentPage--;
//    // рендерим сторінку з розміткою після кліку на кнопку
//       let page = returnPageArray(currentPage--);
//       console.log(page);
//       page.forEach((x) => {
//       renderMarkup(x);
//       console.log(x);
//     });
//   }
// });

// paginationContainer.prepend(previousButton);

// const nextButton = document.createElement('button');
// nextButton.textContent = 'Next';
// nextButton.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     renderItems();
//   }
// });
// paginationContainer.appendChild(nextButton);
