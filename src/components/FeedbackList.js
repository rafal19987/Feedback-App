import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((el) => {
        return (
          <FeedbackItem
            key={el.id}
            id={el.id}
            text={el.text}
            rating={el.rating}
            handleDelete={handleDelete}></FeedbackItem>
        );
      })}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
  handleDelete: PropTypes.func
};

export default FeedbackList;
