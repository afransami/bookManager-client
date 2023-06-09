import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";






const AllBooks = () => {
  
  const [allBooks, setAllBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/all-books')
    .then (res=>res.json())    
    .then (data=>setAllBooks(data))
  },[])


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
      {allBooks.map(book=>
      <BookCard 
      key={book._id}
      book={book}
      ></BookCard>
      )}
      
    </div>
  );
};

export default AllBooks;
