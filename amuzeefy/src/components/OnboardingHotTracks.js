import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hotTracksRequest } from '../redux/Actions/hotTracksAction'
import '../styles/onBoardHotTracks.css'
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { customYoutubeURL } from '../Utils/URLs/urls'
import MusicPlayer from './MusicPlayer';
import ClearIcon from '@material-ui/icons/Clear';
import { pauseMusic, playMusic, showTime } from '../redux/Actions/playbarActions'

const OnboardingHotTracks = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.hotTracksReducer.data)
    const { loading } = useSelector(state => state.hotTracksReducer)
    const [hotTracksArray, setHotTracksArray] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [musicID, setMusicId] = useState(null)
    const [isClosed, setIsClosed] = useState(false)

    useEffect(() => {
        dispatch(hotTracksRequest())
    }, [])

    useEffect(() => {
        setHotTracksArray(data?.tracks)
    }, [loading])

    useEffect(() => {
    }, [isPlaying, musicID, isClosed])

    // console.log('DATA', data?.tracks);

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
                                setIsPlaying(true)
                                if (item.src?.id.includes("youtube")) {
                                    setMusicId(customYoutubeURL + item?.src?.id.split("=")[1])
                                }
                                setIsClosed(true)
                            }}>
                                <PlayCircleFilledIcon className="onboard-play-icon" />
                            </button>
                        </div>
                    </div>
                )
            })}
            {
                isClosed ?
                    <button onClick={() => {
                        setIsPlaying(false)
                        setIsClosed(false)
                        dispatch(playMusic(false))
                        dispatch(pauseMusic(true))
                        dispatch(showTime(false))
                    }}>
                        <ClearIcon
                            style={{
                                color: "white",
                                position: "absolute",
                                top: 5,
                                right: 40,
                                cursor: "pointer"
                            }}
                        />
                    </button>
                    : null
            }
            { isPlaying ? < MusicPlayer url={musicID} /> : null}
        </>
    )
}

export default OnboardingHotTracks
