import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    const url = `http://localhost:5000/all-books`
    useEffect(()=>{
      fetch(url)
      .then (res=>res.json())    
      .then (data=>setAllBooks(data))
    },[url])
console.log(allBooks)

const handleDelete=(id) =>{
    fetch(`http://localhost:5000/book/${id}`,{
        method: "DELETE"
    })
    .then (res => res.json())
    .then (data =>{
        console.log(data);
        if (data.deletedCount > 0) {
            alert("Delete successfully");
            const remaining = allBooks.filter (book => book._id !== id)
            setAllBooks(remaining)
        }
    })
}

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
                    <button onClick={()=>handleDelete(book._id)} className='btn btn-warning btn-outline'>Delete</button>                    
                    <Link to={`/editBooks/${book._id}`} className='btn btn-info btn-outline'>Update</Link>                   
                                      
                </td>
                
            </tr>
              
        )}
          
        </tbody>
      </table>
    </div>
    );
};

export default ManageBooks;