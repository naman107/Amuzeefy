import React, { useEffect } from 'react'
import '../styles/playBarStyle.css'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { playerStrings } from '../Utils/Strings/strings'
import { closeTrackWindow, loopMusic, pauseMusic, playMusic, showTime, setTrackSelected } from '../redux/Actions/playbarActions'

const PlayBar = () => {
    const dispatch = useDispatch()
    const { pause, isTrackSelected, isClosed, artist_image, artist_name, artist_track } = useSelector(state => state.playbarReducer)
    let startTime = useSelector(state => state.playbarReducer.playedSeconds)
    const duration = useSelector(state => state.playbarReducer.duration)
    const displayTime = useSelector(state => state.playbarReducer.show_time)

    startTime = Math.floor((startTime / 60) * 100) / 100;
    let totalTime = (duration / 60).toFixed(2)

    useEffect(() => {
    }, [isClosed])

    const handleOnClickPlayPause = () => {
        if (pause) {
            dispatch(playMusic(true))
            dispatch(pauseMusic(false))
            dispatch(showTime(true))
        } else {
            dispatch(playMusic(false))
            dispatch(pauseMusic(true))
            dispatch(showTime(true))
        }
    }

    const handleOnDismissWindow = () => {
        dispatch(closeTrackWindow(false))
        dispatch(playMusic(false))
        dispatch(pauseMusic(true))
        dispatch(setTrackSelected(false))
    }

    return (
        <div className="play-bar-container">
            <div className="play-bar-left">
                <div className="play-bar-left-image">
                    {artist_image ?
                        <img src={artist_image} alt="" />
                        :
                        <img src={playerStrings.defaultImage} alt="" />
                    }
                </div>
                <div>
                    <div className="play-bar-left-artist">
                        {artist_name ?
                            <p>{artist_name}</p>
                            :
                            <p>Artist</p>
                        }
                    </div>
                    <div className="play-bar-left-track">
                        {artist_track ?
                            <p>{artist_track}</p>
                            :
                            <p>Track</p>
                        }
                    </div>
                </div>
            </div>
            <div className="play-bar-center">
                <div className="icons-div">
                    <div className="play-bar-center-icons">
                        <button>
                            <ShuffleIcon className="shuffle-icon" />
                        </button>
                        <button>
                            <SkipPreviousIcon className="previous-icon" />
                        </button>
                        {isTrackSelected ?
                            pause ? <button
                                onClick={() => {
                                    handleOnClickPlayPause()
                                }}>
                                <PlayCircleFilledIcon className="play-icon" />
                            </button> :
                                <button
                                    onClick={() => {
                                        handleOnClickPlayPause()
                                    }}>
                                    <PauseCircleFilledIcon className="play-icon" />
                                </button> :
                            <button>
                                <PlayCircleFilledIcon className="play-icon" />
                            </button>
                        }
                        <button>
                            <SkipNextIcon className="next-icon" />
                        </button>
                        <button onClick={() => dispatch(loopMusic(true))}>
                            <LoopIcon className="loop-icon" />
                        </button>
                    </div>
                    <div className="progress-div">
                        <div className="start-time">
                            {displayTime ?
                                <h5>{startTime}</h5>
                                :
                                <h5>0.0</h5>
                            }
                        </div>
                        <div className="progress-container">
                            <input className="progress-music-bar" type="range" min="0" max="100" step="3" id="slider" />
                        </div>
                        <div className="duration">
                            {displayTime ?
                                <h5>{totalTime}</h5>
                                :
                                <h5>0.0</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="play-bar-right">
                <VolumeUpIcon className="volume-icon" />
                <input className="volume-bar" type="range" min="0" max="100" step="3" id="volume-slider" />
                {isClosed ?
                    <button onClick={() => handleOnDismissWindow()}>
                        <ClearIcon className="clr-icon" />
                    </button> :
                    null
                }

            </div>
        </div>
    )
}

export default PlayBar
