import PropTypes from 'prop-types'
import React  from 'react'
import { FaSun } from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function Header( { text,bgColor,textColor } ) {

    const {setDarkModeOn} = useContext(FeedbackContext)

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

  return (
    <header style = {headerStyles} >
        <div className='container'>
            <h2> {text} </h2>
        </div>
        <button onClick={setDarkModeOn}>
            <FaSun color='white' style={{position:'relative',right:'650px'}}></FaSun>
        </button>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header