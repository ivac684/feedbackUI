import {Card} from "primereact/card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import 'primeicons/primeicons.css';

function FeedbackItem({item}) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card className="card">
      <div className="edit"><i className="pi pi-file-edit" onClick={() => {editFeedback(item)}}></i></div>
      <div className="delete"><i className="pi pi-times" onClick={() => {deleteFeedback(item.id)}}></i></div>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;