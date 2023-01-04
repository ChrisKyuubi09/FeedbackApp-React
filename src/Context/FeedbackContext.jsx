import { createContext,useState,useEffect } from 'react'
import React from 'react'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback,setFeedback] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //For the light mode
    const [dark,setDark] = useState(false)
    const setDarkModeOn = () => {
        setDark((prevState) => {
            //console.log(prevState)
            return !prevState
        })
    }

    useEffect(() => {
        fetchFeedback()
    } 
    ,[])

    //Fetch data
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
    
        setFeedback(data)
        setIsLoading(false)
      }

    //Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, { method: 'DELETE' })
    
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
    
    //Add Feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newFeedback),
        })
        //newFeedback.id = uuidv4()
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    //Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Update feedback
    const updateFeedback = async (id, itemToUpdate) => {
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemToUpdate)
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) =>(item.id === id ? {...item,...data} : item))
        )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        setDarkModeOn,
        isLoading,
        feedbackEdit,
        dark
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext