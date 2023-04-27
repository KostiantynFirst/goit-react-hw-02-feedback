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

      incrementValueGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
      }

      incrementValueNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
      }

      incrementValueBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
      }

      render() {
        const { good, neutral, bad } = this.state;
    
        return (
            <>
            <FeedbackLabel>
            <FeedbackHeading>Please leave feedback</FeedbackHeading>
            <FeedbackBtns>
              <FeedbackButton>Good</FeedbackButton>
              <FeedbackButton>Neutral</FeedbackButton>
              <FeedbackButton>Bad</FeedbackButton>
            </FeedbackBtns>
          </FeedbackLabel>
          
          <Statistics>
            <StatisticsHeading>Statistics</StatisticsHeading>
            <FeedbackContent>
              <FeedbackGood>
                <FeedbackContentHeading>Good</FeedbackContentHeading>
              </FeedbackGood>
              <FeedbacknNeutral>
                <FeedbackContentHeading>Neutral</FeedbackContentHeading>
              </FeedbacknNeutral>
              <FeedbackBad>
                <FeedbackContentHeading>Bad</FeedbackContentHeading>
              </FeedbackBad>
              <FeedbackTotal>
                <FeedbackContentHeading>Total</FeedbackContentHeading>
              </FeedbackTotal>
              <FeedbackPositive>
                <FeedbackContentHeading>Positive feedback</FeedbackContentHeading>
              </FeedbackPositive>
            </FeedbackContent>
          </Statistics>
          </>
        );      

      }
}