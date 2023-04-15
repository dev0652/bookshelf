import axios from 'axios';

// export default function fetchBooks(name) {


//       return axios.get(`https://books-backend.p.goit.global/books/top-books`)
//       .then(response =>{
      

//         return response.data;
        
//       })
//       .catch(err=> {
//         console.log(err)
//       })
//     }
  

    // Vitalii Code
    
   export default async function getTopBooksArray() {
      try {
        const { data } = await axios.get(
          'https://books-backend.p.goit.global/books/top-books'
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    
   