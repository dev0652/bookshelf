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

// paginations-slider for rendering books
const paginationsSlider = document.querySelector(".paginations-slider");
// container for created buttons paginations
const paginationContainer = document.querySelector('.paginations-container');


// number of books per page in shoping list
const pageSize = 2;
// all pages shoping list
let totalPages = Math.ceil(arrPeoples.length / pageSize);
// current page, after click button paginations 
let currentPage = 1;
// console.log(currentPage);
// start index for slice metod
let startIndex = (currentPage - 1) * pageSize;
// end index for slice metod
let endIndex = startIndex + pageSize;
// slicing an array of objects to create a single page
let itemsOnPage = arrPeoples.slice(startIndex, endIndex);
// console.log(itemsOnPage);

// iterating array for rendering books
itemsOnPage.forEach((item) => {
  // rendering one book
  renderMarkup(item);
});


// creating buttons paginations

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = i;
    // creating button paginations
    const button = document.createElement('button');
    // creating number button
    button.textContent = i;
    // event for rendering book after click on button
    button.addEventListener('click', () => {
      currentPage = pageNumber;
      console.log(currentPage)
    // delete markup books before creating new murkup 
      deleteMurkup();
      createNewBooks();
    });
    // add button after cteated  
    paginationContainer.appendChild(button);
};

// created previous button
const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';
previousButton.addEventListener('click', () => {
   
  if (currentPage > 1) {
    currentPage--;
    deleteMurkup();
    createNewBooks();
  }
});
paginationContainer.prepend(previousButton);

// created Next button
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    deleteMurkup();
    createNewBooks();
  }
});
paginationContainer.appendChild(nextButton);

// created button for return start shoping lsit
const startButton = document.createElement('button');
startButton.textContent = 'start list';
paginationContainer.prepend(startButton);

startButton.addEventListener('click', () => {
    currentPage = 1;
    deleteMurkup();
    createNewBooks();
});

// created button for return end shoping lsit
const endButton = document.createElement('button');
endButton.textContent = 'edn list';
paginationContainer.append(endButton);

endButton.addEventListener('click', () => {
    currentPage = totalPages;
    deleteMurkup();
    createNewBooks();
});





// function for markup render
function renderMarkup(x) {
    paginationsSlider.insertAdjacentHTML("beforeend", Markup(x));
};

// this function delete markup shoping list before new render
function deleteMurkup() {
  paginationsSlider.innerHTML = "";
}

// this function slice array books and created new array books by next render
function sliceArrayBooks() {
  startIndex = (currentPage - 1) * pageSize;
  endIndex = startIndex + pageSize;
  return itemsOnPage = arrPeoples.slice(startIndex, endIndex);
};

// this function create new books on page shoping list 
function createNewBooks() {
  sliceArrayBooks().forEach((item) => {
          renderMarkup(item);
      });
};

function removeDisableforElement(element) {
  element.disabled = false;
};

function addDisableforElement(element) {
  element.disabled = true;
};


// const button = document.createElement('button');
//   button.textContent = "Print currentPage";

//   button.addEventListener('click', () => { 
//   console.log(`currentPage: ${currentPage}`);
//   });
//   paginationContainer.appendChild(button);


