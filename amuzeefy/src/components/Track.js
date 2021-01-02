import React from 'react'
import '../styles/tracksStyle.css'
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { customYoutubeURL } from '../Utils/URLs/urls'
import { useDispatch } from 'react-redux'
import { playMusic, showArtistTrack, showArtistName, showArtistImage, setTrackSelected, closeTrackWindow, setMusicID } from '../redux/Actions/playbarActions'
import { playerStrings } from '../Utils/Strings/strings'

const Track = ({ item, index }) => {

    const dispatch = useDispatch()

    return (
        <div key={index} className="track-container">
            <div className="track-container-left">
                <img src={item.img} alt="" className="onboard-track-img" />
                <div className="track-container-left-name">
                    <h4>{item.name}</h4>
                    <PlaylistAddSharpIcon className="add-to-playlist" />
                </div>
            </div>
            <div className="track-right">
                <button onClick={() => {
                    if (item.src?.id.includes(playerStrings.YOUTUBE)) {
                        dispatch(setMusicID(customYoutubeURL + item?.src?.id.split("=")[1]))
                    }
                    dispatch(showArtistImage(item.img))
                    dispatch(showArtistName(item.name.split("-")[0]))
                    dispatch(showArtistTrack(item.name.split("-")[1]))
                    dispatch(playMusic(true))
                    dispatch(setTrackSelected(true))
                    dispatch(closeTrackWindow(true))
                }}>
                    <PlayCircleFilledIcon className="track-play-icon" />
                </button>
            </div>
        </div>
    )
}

export default Track
