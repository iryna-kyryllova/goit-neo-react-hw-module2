import css from './Feedback.module.css'

const Feedback = () => {
  return (
    <ul className={css.feedback}>
      <li>
        <span>Good: </span>
        <strong></strong>
      </li>
      <li>
        <span>Neutral: </span>
        <strong></strong>
      </li>
      <li>
        <span>Bad: </span>
        <strong></strong>
      </li>
      <li>
        <span>Total: </span>
        <strong></strong>
      </li>
      <li>
        <span>Positive: </span>
        <strong></strong>
      </li>
    </ul>
  )
}

export default Feedback
