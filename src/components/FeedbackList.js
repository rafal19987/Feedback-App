import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((el) => {
        return (
          <FeedbackItem key={el.id} id={el.id} text={el.text} rating={el.rating}></FeedbackItem>
        );
      })}
    </div>
  );
};

export default FeedbackList;
