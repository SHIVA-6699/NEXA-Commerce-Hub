import { useState } from "react";
import "./Review.css";
const StarRating = (props) => {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);

  const handleClick = (i) => {
    setRating(i + 1);
  };

  return (
    <>
    <div className="d-flex gap-2 starele">

      {[...Array(limit)].map((_, i) => (
          <div
          key={i}
          className={i < rating ? "star rated starele" : "star"}
          onClick={() => handleClick(i)}
        >
          {i < rating ? "★" : "☆"}
        </div>
      ))}
          </div>
    </>
  );
};

export default StarRating;
