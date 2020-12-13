import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest } from '../redux/Actions/userAction'
import '../styles/homeMainStyle.css'
import EditIcon from '@material-ui/icons/Edit';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import OnboardingHotTracks from './OnboardingHotTracks'

const Home_main = () => {

    const { data } = useSelector(state => state.userReducer.data)
    const play = useSelector(state => state.hotTracksReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userRequest())
    }, [])

    return (
        <div className='home-main-container'>
            {Boolean(data) ?
                <div className="header-user-profile">
                    <div className="header-user-name-bio">
                        <div className="user-name">
                            <h2>{data.name}</h2>
                        </div>
                        <div className="user-bio">
                            <p>{data.bio}</p>
                        </div>
                    </div>
                    <div className="header-user-loc-edit">
                        <div className="header-edit-icon">
                            <EditIcon className="edit-icon" />
                        </div>
                        <div className="loc-container">
                            <LocationOnIcon className="loc-icon" />
                            {data.loc ? <h3 className="loc-text">{data.loc}</h3> : null}
                        </div>
                    </div>
                </div> : null}
            <OnboardingHotTracks />
        </div>
    )
}

export default Home_main
