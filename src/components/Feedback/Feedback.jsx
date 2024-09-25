import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <ul className={css.feedback}>
      <li>
        <span>Good: </span>
        <strong>{feedback.good}</strong>
      </li>
      <li>
        <span>Neutral: </span>
        <strong>{feedback.neutral}</strong>
      </li>
      <li>
        <span>Bad: </span>
        <strong>{feedback.bad}</strong>
      </li>
      <li>
        <span>Total: </span>
        <strong>{totalFeedback}</strong>
      </li>
      <li>
        <span>Positive: </span>
        <strong></strong>
      </li>
    </ul>
  )
}

export default Feedback
