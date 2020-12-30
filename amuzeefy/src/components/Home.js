import React, { Suspense } from 'react'
import Sidebar from './Sidebar'
import '../styles/homeStyle.css'
import PlayBar from './PlayBar'
import LazyLoader from './LazyLoader'

const LazyHomeMainComp = React.lazy(() => import('./Home_main'))

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <Suspense fallback={<LazyLoader />}>
                <LazyHomeMainComp />
            </Suspense>
            <PlayBar />
        </div>
    )
}

export default Home
