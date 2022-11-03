import Card from "./shared/Card"
import {useState, useEffect} from 'react'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import React  from 'react'
import {useContext} from 'react'
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackForm() {

    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
      if (feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])

    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating] = useState(10)

    const handleTextChange = (e) => {
        if(text === ''){
          setBtnDisabled(true)
          setMessage('')
        }
        else if(text !== '' && text.trim().length <= 10) {
          setMessage('Text must be at lease 10 characters long!')
          setBtnDisabled(true)
        }
        else {
          setMessage(null)
          setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10){
          const newFeedback = {
            text: text,
            rating: rating
          }
          
          if (feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id,newFeedback)
          }
          else{
            addFeedback(newFeedback)
          }

          setText('')
        }
    }
    
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
             
             <RatingSelect selection={(rating) => setRating(rating)}></RatingSelect>
             
             <div className="input-group">
                <input onChange={handleTextChange} value = {text} type="text" placeholder="Wright a review"></input>
                <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
             </div>
        </form>
        {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm