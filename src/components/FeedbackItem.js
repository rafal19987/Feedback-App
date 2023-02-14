import React from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ id, rating, text, handleDelete }) => {
  return (
    <Card>
      <div className="num-display ">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <h2 className="text-display">{text}</h2>
    </Card>
  );
};

FeedbackItem.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  text: PropTypes.string,
  handleDelete: PropTypes.func
};

export default FeedbackItem;
