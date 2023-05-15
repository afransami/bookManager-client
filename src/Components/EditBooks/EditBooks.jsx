import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const EditBooks = () => {
    const {id}=useParams()
    const handleBookUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const categoryName = form.categoryName.value;
        const metaTextDescription = form.metaTextDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;
        const imageUrl = form.imageUrl.value;
    
        const book = { bookName, authorName, bookPdfUrl, imageUrl, categoryName, metaTextDescription };
        console.log(book);
    
        fetch("http://localhost:5000/upload-book", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(book),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };
    
      return (
        <div className="card-body">
          <h1 className="text-5xl text-center font-bold"> Book Upload: </h1>
    
          <Form onSubmit={handleBookUpload}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Name</span>
                </label>
                <input
                  type="text"
                  name="bookName"
                  // defaultValue={user?.displayName}
                  placeholder="Book Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  type="text"
                  name="authorName"
                  placeholder="Author Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Pdf Url</span>
                </label>
                <input
                  type="url"
                  name="bookPdfUrl"
                  placeholder="Book Pdf Url"
                  // defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">image Url</span>
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="Book Pdf Url"
                  // defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Category Name"
                  // defaultValue={'$'+ price}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meta Text Description</span>
                </label>
                <input
                  type="text"
                  name="metaTextDescription"
                  placeholder="Meta Text Description"
                  // defaultValue={'$'+ price}
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-block btn-primary"
                type="submit"
                value="Update confirm"
              />
            </div>
          </Form>
        </div>
    );
};

export default EditBooks;