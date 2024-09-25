import css from './Options.module.css'

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const feedbackOptions = [
    { label: 'Good', type: 'good' },
    { label: 'Neutral', type: 'neutral' },
    { label: 'Bad', type: 'bad' }
  ]

  return (
    <ul className={css.options}>
      {feedbackOptions.map(({ label, type }) => (
        <li key={label}>
          <button type='button' className={css.option} onClick={() => updateFeedback(type)}>
            {label}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button type='button' className={css.option} onClick={resetFeedback}>
            Reset
          </button>
        </li>
      )}
    </ul>
  )
}

export default Options
