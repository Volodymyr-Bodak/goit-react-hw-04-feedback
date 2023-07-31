import React from "react";
import styles from "components/Feedback/Feedback.module.css";
import PropTypes from "prop-types";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={styles["feedback-button"]} // Use the CSS Module class name here
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
