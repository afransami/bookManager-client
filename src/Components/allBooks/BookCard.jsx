import React from "react";
import { Link, useParams } from "react-router-dom";

const BookCard = ({book}) => {
    const {id} =useParams()
    const {authorName, bookName, bookPdfUrl, categoryName, metaTextDescription, imageUrl, _id} =book
  return (
    <div className="mt-10 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={imageUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>{authorName}</p>
        <p>{metaTextDescription}</p>
        <div className="card-actions justify-end">
          <Link to = {`/updateData/:${id}`}><button className="btn btn-primary">Update Data</button></Link>
          <Link to = {``}><button className="btn btn-primary">Update Data</button></Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
