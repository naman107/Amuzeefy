import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hotTracksRequest } from '../redux/Actions/hotTracksAction'
import MusicPlayer from './MusicPlayer';
import Track from './Track'

const OnboardingHotTracks = () => {
    const dispatch = useDispatch()
    const { isClosed, musicId } = useSelector(state => state.playbarReducer)
    const { data } = useSelector(state => state.hotTracksReducer.data)
    const { loading } = useSelector(state => state.hotTracksReducer)
    const [hotTracksArray, setHotTracksArray] = useState([])

    useEffect(() => {
        dispatch(hotTracksRequest())
    }, [])

    useEffect(() => {
        setHotTracksArray(data?.tracks)
    }, [loading])

    useEffect(() => {
    }, [isClosed])

    return (
        <>
            {hotTracksArray?.map((item, index) => {
                return (
                    <Track item={item} index={index} key={index} />
                )
            })}
            { isClosed ? < MusicPlayer url={musicId} /> : null}
        </>
    )
}

export default OnboardingHotTracks
