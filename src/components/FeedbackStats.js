import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  //Calculate ratings avg
  let average =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {!average ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
