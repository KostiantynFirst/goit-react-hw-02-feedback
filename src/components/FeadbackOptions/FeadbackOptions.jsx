import { FeedbackBtns, FeedbackButton } from "./FeadbackOptions.styled"

export const FeadbackOptions = ({incrementGood, incrementNeutral, incrementBad }) => {
    return (
        <FeedbackBtns>
            <FeedbackButton type="button" onClick={incrementGood}>Good</FeedbackButton>
            <FeedbackButton type="button" onClick={incrementNeutral}>Neutral</FeedbackButton>
            <FeedbackButton type="button" onClick={incrementBad}>Bad</FeedbackButton>
        </FeedbackBtns>
    )
}
