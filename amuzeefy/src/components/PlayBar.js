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
import { loopMusic, pauseMusic, playMusic } from '../redux/Actions/playbarActions'

const PlayBar = () => {
    const dispatch = useDispatch()
    const [isPaused, setIsPaused] = useState(true)
    const pause = useSelector(state => state.playbarReducer.pause)

    // useEffect(() => {
    //     console.log('PAUSE VALUE', isPaused);
    // }, [isPaused])

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
                            }}>
                            <PlayCircleFilledIcon className="play-icon" />
                        </button> :
                            <button
                                onClick={() => {
                                    dispatch(playMusic(false))
                                    dispatch(pauseMusic(true))
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
                        <input className="progress-music-bar" type="range" min="0" max="100" step="3" id="slider" />
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
