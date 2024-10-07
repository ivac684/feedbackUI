import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState();
  const ratings = Array.from({ length: 10 }, (_, index) => index + 1);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    const value = +e.target.value;
    setSelected(value);
    select(value);
  };

  return (
    <ul className="rating">
      {ratings.map((num) => (
        <li key={num} className={`button-style ${selected === num ? 'selected' : ''}`}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={num}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
