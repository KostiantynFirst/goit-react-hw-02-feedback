import { Component } from "react"
import { FeedbackLabel, FeedbackHeading, FeedbackBtns, FeedbackButton, FeedbackGood, FeedbacknNeutral, FeedbackBad, Statistics, StatisticsHeading, FeedbackContent, FeedbackContentHeading, FeedbackTotal, FeedbackPositive } from "./Feadback.style";

export class Feadback extends Component {

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


      render() {
        const { good, neutral, bad } = this.state;
    
        return (
            <>
            <FeedbackLabel>
            <FeedbackHeading>Please leave feedback</FeedbackHeading>
            <FeedbackBtns>
              <FeedbackButton type="button" data-name="good" onClick={this.incrementGood}>Good</FeedbackButton>
              <FeedbackButton type="button" data-name="neutral" onClick={this.incrementNeutral}>Neutral</FeedbackButton>
              <FeedbackButton type="button" data-name="bad" onClick={this.incrementBad}>Bad</FeedbackButton>
            </FeedbackBtns>
          </FeedbackLabel>
          
          <Statistics>
            <StatisticsHeading>Statistics</StatisticsHeading>
            <FeedbackContent>
              <FeedbackGood>
                <FeedbackContentHeading>Good : {good}</FeedbackContentHeading>
              </FeedbackGood>
              <FeedbacknNeutral>
                <FeedbackContentHeading>Neutral : {neutral}</FeedbackContentHeading>
              </FeedbacknNeutral>
              <FeedbackBad>
                <FeedbackContentHeading>Bad : {bad}</FeedbackContentHeading>
              </FeedbackBad>
              <FeedbackTotal>
                <FeedbackContentHeading>Total : {good + neutral + bad}</FeedbackContentHeading>
              </FeedbackTotal>
              <FeedbackPositive>
                <FeedbackContentHeading>Positive<br/>feedback : {good}%</FeedbackContentHeading>
              </FeedbackPositive>
            </FeedbackContent>
          </Statistics>
          </>
        );      

      }
}