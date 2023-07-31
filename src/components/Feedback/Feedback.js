import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Stats";
import Notification from "./Notification";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleOnLeaveFeedback} />
        </Section>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
        )}
      </div>
    );
  }
}

