import { FeedbackBtns, FeedbackButton } from "./FeadbackOptions.styled"

export const FeadbackOptions = ({options, onleaveFeadback}) => {
    return (
        <FeedbackBtns>
         {options.map(option => (
        <FeedbackButton type="button" key={option} onClick={() => onleaveFeadback(option)}>{option}</FeedbackButton>
    ))}
         
            {/* {options.map(({option}) => {
                <FeedbackButton type="button" onClick={onleaveFeadback}>{option}</FeedbackButton>
            ))}         */}
        </FeedbackBtns>
    )
}



