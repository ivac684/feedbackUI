import { useContext, useState, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { InputText } from "primereact/inputtext";
import FeedbackContext from "../context/FeedbackContext";
import {Card} from "primereact/card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  useEffect(() => {
    if (text === "" || (text.trim().length <= 10) || !rating) {
      setBtnDisabled(true);
      if (text !== "" && text.trim().length <= 10) {
        setMessage("Text must be at least 10 characters");
      } else {
        setMessage(null);
      }
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  }, [text, rating]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setRating(null); 
    }
  };

  return (
    <Card className="card">
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <InputText
            value={text}
            onChange={handleTextChange}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}></Button>
        </div>
        <div className="length-msg">{message}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
