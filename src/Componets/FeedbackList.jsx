import FeedbackItem from './FeedbackItem'
import React  from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList( ) {

  const {feedback,isLoading} = useContext(FeedbackContext)

  // const [lights,setLights] = useState(false)

  // const switchLights = () => {
  //   setLights((prevState) => {
  //     console.log(prevState)
  //     return !prevState
  //   })
  // }

  console.log(feedback)

  //feedback = 0

  if ( !isLoading && (!feedback || feedback.length === 0) ){
    return (
      <>
        <p>No available feedback to display!</p>
        <Spinner/>
      </>
        
    )
  }
  
  return isLoading ? <Spinner/> : 
  <>
    {/* <button className='lightSwitch' onClick = {switchLights}>
      <FiSun color='white'></FiSun>
    </button> */}

    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((comment) => (
          <motion.div
              key={comment.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}>
                <FeedbackItem key = {comment.id} commentObject = {comment} />
          </motion.div>
          
        ))}
      </AnimatePresence>
    
    </div>
  </>
}

export default FeedbackList