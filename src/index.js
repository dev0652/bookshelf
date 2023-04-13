import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import Markup from './templates/paginations.hbs';

// ##################################################################

const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################


const ShopList = [
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

//! виймаю збережені у локал сторейдж дані
// const shoppingList = JSON.parse(localStorage.getItem('ShopList'));

// кількість елементів на сторінці
const pageSize = 2;
let currentPage = null;
// загальна к-сть сторінок
const totalPages = Math.ceil(ShopList.length / pageSize);

/* функція, яка повертає масив з певною к-стю об'єктів для 
подальшого створення розмітки*/  
function returnPageArray(x) {
    let currentPage = x;
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    let itemsOnPage = ShopList.slice(startIndex, endIndex);
    return itemsOnPage;
};


// функція рендеру розмітки 
function renderMarkup(x) {
    const div = document.querySelector(".paginations-slider");
    div.insertAdjacentHTML("beforeend", Markup(x));
};

// перебор масиву з подальшим рендигом
returnPageArray(2)
    .forEach((x) => {
    renderMarkup(x);
    console.log(x);
});

// btn paginations
const paginationContainer = document.querySelector('.paginations-container');

console.log(currentPage);

// цикл автоматичного створення кнопок для перегортання сторінок 
for (let i = 1; i <= totalPages; i++) {
  const button = document.createElement('button');
    button.textContent = i;
    
    // створення слухача з хендлером
  button.addEventListener('click', () => {
      currentPage = i;
    //   видаляємо розмітку перед рендингом
      document.querySelector(".paginations-slider").innerHTML = "";
    
      // рендерим сторінку з розміткою після кліку на кнопку
      let page = returnPageArray(i);
      page.forEach((x) => {
          renderMarkup(x);
          return currentPage;
    });
  });
  paginationContainer.appendChild(button);
};

console.log(currentPage);

const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';

previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    // currentPage--;
   // рендерим сторінку з розміткою після кліку на кнопку
      let page = returnPageArray(currentPage--);
      console.log(page);
      page.forEach((x) => {
      renderMarkup(x);
      console.log(x);
    });
  }
});

paginationContainer.prepend(previousButton);

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderItems();
  }
});
paginationContainer.appendChild(nextButton);
