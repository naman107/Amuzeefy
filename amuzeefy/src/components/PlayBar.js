import React, { useState, useEffect } from 'react'
import '../styles/playBarStyle.css'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { useDispatch, useSelector } from 'react-redux';
import { loopMusic, pauseMusic, playMusic, showTime } from '../redux/Actions/playbarActions'

const PlayBar = () => {
    const dispatch = useDispatch()
    const pause = useSelector(state => state.playbarReducer.pause)
    let startTime = useSelector(state => state.playbarReducer.playedSeconds)
    const duration = useSelector(state => state.playbarReducer.duration)
    const displayTime = useSelector(state => state.playbarReducer.show_time)

    startTime = Math.floor((startTime / 60) * 100) / 100;
    let totalTime = (duration / 60).toFixed(2)

    return (
        <div className="play-bar-container">
            <div className="play-bar-left">
                <h4>left</h4>
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
                        {pause ? <button
                            onClick={() => {
                                dispatch(playMusic(true))
                                dispatch(pauseMusic(false))
                                dispatch(showTime(true))
                            }}>
                            <PlayCircleFilledIcon className="play-icon" />
                        </button> :
                            <button
                                onClick={() => {
                                    dispatch(playMusic(false))
                                    dispatch(pauseMusic(true))
                                    dispatch(showTime(true))
                                }}>
                                <PauseCircleFilledIcon className="play-icon" />
                            </button>}
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
            </div>
        </div>
    )
}

export default PlayBar
