import React  from 'react'
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

    //Calculate Average stats
    let average = 
        feedback.reduce((sum,cur) => {
            return sum + cur.rating
        },0) / feedback.length
    
    average = average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats