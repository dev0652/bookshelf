
export default function fetchBooks(name) {


    return  fetch(`https://books-backend.p.goit.global/books/top-books`).then(response =>{
          if(!response.ok) {
              throw new Error(response.status)
              }
          return response.json();
      })}
  
   