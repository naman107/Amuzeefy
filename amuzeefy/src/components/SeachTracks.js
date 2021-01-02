import React from 'react'
import PlayBar from './PlayBar'
import Sidebar from './Sidebar'
import '../styles/searchTracksStyle.css'
import SearchMain from './SearchMain'

const SearchTracks = () => {
    return (
        <div className="search-container">
            <Sidebar />
            <SearchMain />
            <PlayBar />
        </div>
    )
}

export default SearchTracks
