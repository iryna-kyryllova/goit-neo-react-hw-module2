import css from './Options.module.css'

const Options = () => {
  return (
    <ul className={css.options}>
      <li>
        <button type='button' className={css.option}>
          Good
        </button>
      </li>
      <li>
        <button type='button' className={css.option}>
          Neutral
        </button>
      </li>
      <li>
        <button type='button' className={css.option}>
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
