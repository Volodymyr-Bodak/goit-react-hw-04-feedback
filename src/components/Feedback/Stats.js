import React from "react";
import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      
      
      <ul>
        <li>
          <span>Good {good}</span>
        </li>
        <li>
          <span>Neutral {neutral}</span>
        </li>
        <li>
          <span>Bad {bad}</span>
        </li>
        <li>
          <span>Total {total}</span>
        </li>
        <li>
          <span>Positive feedbacks {positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
