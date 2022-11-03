import Spinner from 'react-bootstrap/Spinner'
import FeedbackItem from './FeedbackItem'
import { FiSun } from 'react-icons/fi'
import {useState} from 'react'
import React  from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackList( { handleDelete } ) {

  const {feedback} = useContext(FeedbackContext)

  const [lights,setLights] = useState(true)

  const switchLights = () => {
    setLights((prevState) => {
      console.log(prevState)
      return !prevState
    })
}

  console.log(feedback)

  //feedback = 0

  if (!feedback || feedback.length === 0){
    return (
        <div style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',}}>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
        </div>
    )
  }

    return (
      <>
        <button className='lightSwitch' onClick = {switchLights}>
          <FiSun color='white'></FiSun>
        </button>

        <div className='feedback-list'>
          <AnimatePresence>
            {feedback.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}>
                    <FeedbackItem key = {comment.id} commentObject = {comment} propagateLights = {lights}/>
                </motion.div>
                
            ))}
          </AnimatePresence>
          
        </div>
      </>
    
  )
}

export default FeedbackList