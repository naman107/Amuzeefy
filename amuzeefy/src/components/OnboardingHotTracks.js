import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hotTracksRequest } from '../redux/Actions/hotTracksAction'
import '../styles/onBoardHotTracks.css'
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { customYoutubeURL } from '../Utils/URLs/urls'
import MusicPlayer from './MusicPlayer';
import { playMusic, showArtistTrack, showArtistName, showArtistImage, setTrackSelected, closeTrackWindow } from '../redux/Actions/playbarActions'

const OnboardingHotTracks = () => {
    const dispatch = useDispatch()
    const { isClosed } = useSelector(state => state.playbarReducer)
    const { data } = useSelector(state => state.hotTracksReducer.data)
    const { loading } = useSelector(state => state.hotTracksReducer)
    const [hotTracksArray, setHotTracksArray] = useState([])
    const [musicID, setMusicId] = useState(null)

    useEffect(() => {
        dispatch(hotTracksRequest())
    }, [])

    useEffect(() => {
        setHotTracksArray(data?.tracks)
    }, [loading])

    useEffect(() => {
    }, [musicID])

    useEffect(() => {
    }, [isClosed])

    return (
        <>
            {hotTracksArray?.map((item, index) => {
                return (
                    <div key={index} className="onboard-container">
                        <div className="onboard-container-left">
                            <img src={item.img} alt="" className="onboard-track-img" />
                            <div className="onboard-container-left-name">
                                <h4>{item.name}</h4>
                                <PlaylistAddSharpIcon className="add-to-playlist" />
                            </div>
                        </div>
                        <div className="onboard-right">
                            <button onClick={() => {
                                if (item.src?.id.includes("youtube")) {
                                    setMusicId(customYoutubeURL + item?.src?.id.split("=")[1])
                                }
                                dispatch(showArtistImage(item.img))
                                dispatch(showArtistName(item.name.split("-")[0]))
                                dispatch(showArtistTrack(item.name.split("-")[1]))
                                dispatch(playMusic(true))
                                dispatch(setTrackSelected(true))
                                dispatch(closeTrackWindow(true))
                            }}>
                                <PlayCircleFilledIcon className="onboard-play-icon" />
                            </button>
                        </div>
                    </div>
                )
            })}
            { isClosed ? < MusicPlayer url={musicID} /> : null}
        </>
    )
}

export default OnboardingHotTracks
