import { Component } from "react";
import { FeedbackLabel, FeedbackHeading } from "./App.styled";
import { FeadbackOptions } from "components/FeadbackOptions/FeadbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export class App extends Component {

  static defaultProps = {
      initialValue: 0,
    };

    state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue
    }

    incrementGood = () => {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    };

    incrementNeutral = () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    };

    incrementBad = () => {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    };

    
    countTotalFeedback(good, neutral, bad){
      let total = (good + neutral + bad);
      return total;
    };

    countPositiveFeedbackPercentage(good, neutral, bad){
      let positiveFeedback = Math.round(good / (good + neutral + bad) * 100);
      // console.log(positiveFeedback);
      return positiveFeedback;
    }


    render() {
      const { good, neutral, bad } = this.state;
  
      return (
          <>
          <FeedbackLabel>
              <FeedbackHeading>Please leave feedback</FeedbackHeading>
          </FeedbackLabel>
        
        <FeadbackOptions/>
        <Statistics/>

        </>
      );      

    }
}
