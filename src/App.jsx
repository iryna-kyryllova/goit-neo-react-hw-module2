import { useEffect, useState } from 'react'
import Description from 'components/Description/Description'
import Options from 'components/Options/Options'
import Feedback from 'components/Feedback/Feedback'
import Notification from 'components/Notification/Notification'

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0
}

const App = () => {
  const getInitialFeedback = () => {
    const localStorageFeedback = localStorage.getItem('feedback')
    return localStorageFeedback ? JSON.parse(localStorageFeedback) : initialFeedback
  }

  const [feedback, setFeedback] = useState(getInitialFeedback)

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }))
  }

  const resetFeedback = () => {
    setFeedback(initialFeedback)
  }

  return (
    <div className='container'>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  )
}

export default App
