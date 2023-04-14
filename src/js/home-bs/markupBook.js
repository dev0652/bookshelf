export  const createBookMarkup =  (category)=> {

    const markup =  category.map((book)=> {   
   
       return `
       <li class="book-item">
       <img  src="${book.book_image}"  loading="lazy"  class="book-image"/>
       <h3 class="book-title">${book.title}</h3>
       <p class="book-author"> ${book.author}
        </p>
        </li>`
       
    
   }).join("");
   
    return markup;
   
   }