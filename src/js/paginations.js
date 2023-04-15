/* paginations-slider for rendering books */
const paginationsSlider = document.querySelector(".paginations-slider");

// container for created buttons paginations
const paginationContainerPages = document.querySelector(".paginations__container-pages");
const paginationContainerBackBtn = document.querySelector(".paginations__container-back");
const paginationContainerEndBtn = document.querySelector(".paginations__container-end");

// buttons paginations
const startButton = document.querySelector("button[name='startButton']");
const previousButton = document.querySelector("button[name='previousButton']");
const nextButton = document.querySelector("button[name='nextButton']");
const endButton = document.querySelector("button[name='endButton']");



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

function activDisplayFlexOnElement(element) {
  element.style.display = "flex";
};



