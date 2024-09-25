import { useState } from 'react'
import Description from 'components/Description/Description'
import Options from 'components/Options/Options'
import Feedback from 'components/Feedback/Feedback'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }))
  }

  return (
    <div className='container'>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 && <Feedback feedback={feedback} totalFeedback={totalFeedback} />}
    </div>
  )
}

export default App
