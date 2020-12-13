import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { pauseMusic } from '../redux/Actions/playbarActions'
import '../styles/musicPlayerStyle.css'

const MusicPlayer = ({ url }) => {

    const dispatch = useDispatch()
    const play = useSelector(state => state.playbarReducer.play)
    const loop = useSelector(state => state.playbarReducer.loop)

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
                onPlay={() => dispatch(pauseMusic(false))}
                onPause={() => dispatch(pauseMusic(true))}
            />
        </div>
    )
}

export default MusicPlayer
