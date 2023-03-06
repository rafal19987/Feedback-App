import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ id, rating, text }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display ">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <h2 className="text-display">{text}</h2>
    </Card>
  );
};

FeedbackItem.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  text: PropTypes.string
};

export default FeedbackItem;
