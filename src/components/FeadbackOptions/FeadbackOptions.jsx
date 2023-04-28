import { FeedbackBtns, FeedbackButton } from "./FeadbackOptions.styled"

export const FeadbackOptions = () => {
    return (
        <FeedbackBtns>
            <FeedbackButton type="button" onClick={this.incrementGood}>Good</FeedbackButton>
            <FeedbackButton type="button" onClick={this.incrementNeutral}>Neutral</FeedbackButton>
            <FeedbackButton type="button" onClick={this.incrementBad}>Bad</FeedbackButton>
        </FeedbackBtns>
    )
}
