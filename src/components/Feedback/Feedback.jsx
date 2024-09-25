import css from './Feedback.module.css'

const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback, positiveFeedback }) => {
  const feedbackItems = [
    { label: 'Good', value: good },
    { label: 'Neutral', value: neutral },
    { label: 'Bad', value: bad },
    { label: 'Total', value: totalFeedback },
    { label: 'Positive', value: `${positiveFeedback}%` }
  ]
  return (
    <ul className={css.feedback}>
      {feedbackItems.map(({ label, value }) => (
        <li key={label}>
          <span>{label}: </span>
          <strong>{value}</strong>
        </li>
      ))}
    </ul>
  )
}

export default Feedback
