import Card from './shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import React  from 'react'
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItem({ commentObject }) {

  const {deleteFeedback,editFeedback,dark} = useContext(FeedbackContext)

  return (
    <Card reverse = {dark}>
        <div className="num-display">{ commentObject.rating }</div>
        <button onClick={() => deleteFeedback(commentObject.id) } className="close">
          <FaTimes color='purple'></FaTimes>
        </button>
        <button onClick={() => editFeedback(commentObject)} className="edit">
          <FaEdit color='blue' />
        </button>
        <div className="text-display"> { commentObject.text } </div>
        {/* <Button>Change Rating</Button> */}
    </Card>
  )
}

export default FeedbackItem