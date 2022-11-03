import { createContext,useState } from 'react'
import React from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text: "Anakin Skywalker",
            rating:1

        },
        {
            id:2,
            text: "Bobba Fett",
            rating:2

        },
        {
            id:3,
            text: "Mace Windu",
            rating:3

        }
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm ('Are you sure you want to delete?')) {
          setFeedback(feedback.filter( (item) => (item.id !== id) ))
        }
      }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, itemToUpdate) => {
        setFeedback(
            feedback.map((item) =>(item.id === id ? {...item,...itemToUpdate} : item))
        )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext