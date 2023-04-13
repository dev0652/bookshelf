export  const createBookMarkup =  (category)=> {

    const markup =  category.map((book)=> {   
   
       return `
       <li>
       <img  src="${book.book_image}"  loading="lazy" width="180" height="256"/>
       <h3 class="book-title">${book.list_name}</h3>
       <p class="book-author"> ${book.author}
        </p>
        </li>`
       
    
   }).join("");
   
    return markup;
   
   }