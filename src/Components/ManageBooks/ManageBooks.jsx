import React, { useEffect, useState } from 'react';

const ManageBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(()=>{
      fetch('http://localhost:5000/all-books')
      .then (res=>res.json())    
      .then (data=>setAllBooks(data))
    },[])
console.log(allBooks)
    
    return (
        <div className="overflow-x-auto w-full mx-auto container">
        <h1 className="text-3xl">Your book List: {allBooks.length} </h1>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>                       
            <th>SL</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Category Name</th>
            <th>Action</th>                        
          </tr>
        </thead>
        <tbody>
          {
            allBooks.map((book, i)=><tr key={book._id}>
                
                <th>{i+1}</th>
                <th>{book.bookName}</th>
                <td>{book.authorName}</td>
                <td>{book.categoryName}</td>
                <td className='gap-4 flex'>
                    <button className='btn btn-warning btn-outline'>Delete</button>                    
                    <button className='btn btn-info btn-outline'>Update</button>                    
                </td>
                
            </tr>
              
        )}
          
        </tbody>
      </table>
    </div>
    );
};

export default ManageBooks;