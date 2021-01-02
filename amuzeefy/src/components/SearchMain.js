import React, { useEffect, useState } from 'react'
import '../styles/searchMainStyle.css'
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux'
import { searchTracksRequest, searchTrackString } from '../redux/Actions/searchTracksAction';
import { searchStrings } from '../Utils/Strings/strings';
import { Link } from 'react-router-dom';

const SearchMain = () => {

    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [isActive, setIsActive] = useState(false)

    const onInputListener = (e) => {
        const inputValue = e.target.value
        setSearchName(inputValue)
    }

    const onEnterKeyDownListener = (e) => {
        if (searchName !== '') {
            if (e.keyCode === 13) {
                dispatch(searchTrackString(searchName))
                dispatch(searchTracksRequest())
                setIsActive(true)
            }
        }
    }

    return (
        <div style={{
            minHeight: "100vh"
        }}>
            <div className="search-header-container">
                <div className="search-icon-div">
                    <SearchIcon className="search-icon" />
                </div>
                <div className="search-text-div">
                    <input
                        type="text"
                        placeholder={searchStrings.searchInputString}
                        onChange={onInputListener}
                        onKeyDown={onEnterKeyDownListener}
                    />
                </div>
            </div>
            <div className="search-body-container">
                <Link to={isActive ? "/searchPlaylists" : "#"} className="link-playlists">
                    <div className="search-body-playlist-card">
                        <h1>{searchStrings.searchPlaylistsString}</h1>
                    </div>
                </Link>
                <Link to={isActive ? "/searchTracks" : "#"} className="link-tracks">
                    <div className="search-body-tracks-card">
                        <h1>{searchStrings.searchTracksString}</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SearchMain
