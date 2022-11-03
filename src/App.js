import Header from './Componets/Header'
import FeedbackList from './Componets/FeedbackList'
import 'bootstrap/dist/css/bootstrap.min.css'
import FeedbackStats from './Componets/FeedbackStats'
import FeedbackForm from './Componets/FeedbackForm'
import React  from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AboutPage from './Componets/Pages/AboutPage'
import AboutLinkIcon from './Componets/AboutLinkIcon'
import {FeedbackProvider} from './Context/FeedbackContext'

function App(){
    
    // const [feedback, setfeedback] = useState([
    //     {
    //       id: 1,
    //       rating: 10,
    //       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    //     },
    //     {
    //       id: 2,
    //       rating: 9,
    //       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    //     },
    //     {
    //       id: 3,
    //       rating: 8,
    //       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    //     },
    //   ])

      
    
    return (
      <FeedbackProvider>
        <Router>
          <>
            <Header />
            <div className='container'>
            <Routes>
            <Route
                path='/'
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }></Route>

                <Route path ='/about' element={<AboutPage />} />
            </Routes>
            <AboutLinkIcon/>
            </div>
          </>
        </Router>
      </FeedbackProvider>          

    )
}

export default App