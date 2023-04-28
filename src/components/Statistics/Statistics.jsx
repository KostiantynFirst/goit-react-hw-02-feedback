import { FeedbackGood, FeedbacknNeutral, FeedbackBad, FeedbackTotal, FeedbackPositive, StatisticsSection, StatisticsHeading, FeedbackContent, FeedbackContentHeading } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad}) => {
    return (
        <StatisticsSection>
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
            <FeedbackContentHeading>Total : {this.countTotalFeedback(good, neutral, bad)}</FeedbackContentHeading>
          </FeedbackTotal>
          <FeedbackPositive>
            <FeedbackContentHeading>Positive<br/>feedback : {this.countPositiveFeedbackPercentage(good, neutral, bad)}%</FeedbackContentHeading>
          </FeedbackPositive>
        </FeedbackContent>
        </StatisticsSection>

    )

}
