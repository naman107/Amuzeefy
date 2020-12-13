import React from 'react'
import Home_main from './Home_main'
import Sidebar from './Sidebar'
import '../styles/homeStyle.css'
import PlayBar from './PlayBar'

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <Home_main />
            <PlayBar />
        </div>
    )
}

export default Home
