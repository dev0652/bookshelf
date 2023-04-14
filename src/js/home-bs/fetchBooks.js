import axios from 'axios';

export default function fetchBooks(name) {


      return axios.get(`https://books-backend.p.goit.global/books/top-books`)
      .then(response =>{
      

        return response.data;
        
      })
      .catch(err=> {
        console.log(err)
      })
    }
  
   