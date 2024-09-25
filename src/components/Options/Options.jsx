import css from './Options.module.css'

const Options = ({ updateFeedback }) => {
  return (
    <ul className={css.options}>
      <li>
        <button type='button' className={css.option} onClick={() => updateFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button type='button' className={css.option} onClick={() => updateFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button type='button' className={css.option} onClick={() => updateFeedback('bad')}>
          Bad
        </button>
      </li>
      <li>
        <button type='button' className={css.option}>
          Reset
        </button>
      </li>
    </ul>
  )
}

export default Options
