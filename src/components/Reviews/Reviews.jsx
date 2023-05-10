import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "Services/fetch";
import dateFormat from "dateformat";

const Reviews = () =>{

  const {movieId} = useParams();
  const [reviews, setReviews] = useState([]);
 
  useEffect(()=>{
    getMoviesReviews(movieId)
    .then(res => setReviews(res.results))
    .catch(error => {console.error(error.message)})
  },[movieId])

  return(
    <>
    {reviews.length > 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>
              Date of create: {dateFormat(review.created_at, 'paddedShortDate', true)}
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie</p>
    )}
  </>
  )
}

export default Reviews;