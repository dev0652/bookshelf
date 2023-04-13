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


const pageSize = 1;
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
      console.log(currentPage)
      paginationsSlider.innerHTML = "";
      
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
      itemsOnPage = arrPeoples.slice(startIndex, endIndex);
      
    itemsOnPage.forEach((item) => {
      renderMarkup(item);
    });
  });
  paginationContainer.appendChild(button);
};

  const button = document.createElement('button');
  button.textContent = "Print currentPage";

  button.addEventListener('click', () => { 
  console.log(`currentPage: ${currentPage}`);
  });
  paginationContainer.appendChild(button);



function renderMarkup(x) {
    paginationsSlider.insertAdjacentHTML("beforeend", Markup(x));
};


