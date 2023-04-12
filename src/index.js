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

// виймаю збережені у локал сторейдж дані
// const shoppingList = JSON.parse(localStorage.getItem('ShopList'));

const pageSize = 3;
const totalPages = Math.ceil(ShopList.length / pageSize);

const currentPage = 1;
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const itemsOnPage = ShopList.slice(startIndex, endIndex);

function renderMarkup(ShopList) {
    document.querySelector(".paginations-slider").insertAdjacentHTML("beforeend", Markup(ShopList));
};

// перебор масиву
itemsOnPage.forEach((x) => {
    renderMarkup(x);
    console.log(x);
});

console.log(Markup(ShopList));