
import React from "react";
import styles from 'components/Feedback/Section.module.css'
import PropTypes from "prop-types";
const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
