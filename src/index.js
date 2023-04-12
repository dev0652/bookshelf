import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';

// ##################################################################

const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################

// console.log("1");
// const array = [];

// const API = "https://books-backend.p.goit.global/books/top-books";

// function fetchBooks(API) {
//   return fetch(API)
//     .then(response => {
//       if (!response.ok) {
        
//         throw new Error(response.status)
//     }
//     return response.json();
//     })
// }

// fetchBooks(API)
//     .then(books => {
//         // console.log(books[0].books)
//         return books[0].books.map(x => {
//             return array.push(x);
//         })
//     });

// console.log(array);

// function stringifyWithObjects(arr) {
//   return JSON.stringify(arr, function(key, value) {
//     if (typeof value === 'object' && value !== null) {
//       return stringifyWithObjects(value);
//     }
//     return value;
//   });
// };

// const localInfo = localStorage.setItem("MyBooks", stringifyWithObjects(array));


// function parseWithObjects(str) {
//   return JSON.parse(str, function(key, value) {
//     if (typeof value === 'object' && value !== null) {
//       return parseWithObjects(value);
//     }
//     return value;
//   });
// }

// const jsonInfoBack = parseWithObjects(localInfo);

// console.log(jsonInfoBack); 


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

// виймаю збережені у локал сторейдж дані
const shoppingList = JSON.parse(localStorage.getItem('ShopList'));

const pageSize = 2;
const totalPages = Math.ceil(shoppingList.length / pageSize);

const currentPage = 1;
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const itemsOnPage = shoppingList.slice(startIndex, endIndex);

// перебор масиву
itemsOnPage.forEach((item) => {
  // відображення елементів на сторінці
});