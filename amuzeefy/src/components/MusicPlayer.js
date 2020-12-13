import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { pauseMusic, playMusic } from '../redux/Actions/playbarActions'
import '../styles/musicPlayerStyle.css'

const MusicPlayer = ({ url }) => {

    const dispatch = useDispatch()
    const play = useSelector(state => state.playbarReducer.play)
    const loop = useSelector(state => state.playbarReducer.loop)

    const handleOnPlay = () => {
        dispatch(pauseMusic(false))
        dispatch(playMusic(true))
    }

    const handleOnPause = () => {
        dispatch(pauseMusic(true))
    }

    return (
        <div className="music-player">
            <ReactPlayer
                // ref={player}
                url={url}
                controls={false}
                width="18rem"
                height="15rem"
                playing={play}
                loop={loop}
                onPlay={handleOnPlay}
                onPause={handleOnPause}
            />
        </div>
    )
}

export default MusicPlayer
