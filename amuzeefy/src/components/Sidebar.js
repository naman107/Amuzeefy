import React, { useState, useEffect } from 'react'
import '../styles/sidebarStyle.css'
import { useSelector } from 'react-redux'
import { sidebarString } from '../Utils/Strings/strings'
import { app_logo } from '../Utils/URLs/urls'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddIcon from '@material-ui/icons/Add';
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';

const Sidebar = () => {
    const { data } = useSelector(state => state.userReducer.data)
    const { loading } = useSelector(state => state.userReducer)
    const [playlistObj, setPlaylistObj] = useState([])

    useEffect(() => {
        if (Boolean(data)) {
            setPlaylistObj(data.pl)
        }
    }, [loading])

    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <img src={app_logo} alt="" />
                <h5>{sidebarString.logo_name}</h5>
            </div>
            <div>
                <SidebarOptions Icon={HomeIcon} title={sidebarString.home} border={true} />
                <SidebarOptions Icon={SearchIcon} title={sidebarString.search} border={true} />
                {/* <SidebarOptions Icon={LibraryMusicIcon} title={sidebarString.library} border={true} /> */}
                <SidebarOptions Icon={MenuOpenSharpIcon} title={sidebarString.genres} border={true} />
            </div>
            <h3 className="playlist-heading-text">PLAYLISTS</h3>
            <div>
                <SidebarOptions Icon={AddIcon} title={sidebarString.create_playlist} border={false} />
            </div>
            <hr size={1} />
            {playlistObj?.map((item) => {
                return (
                    <SidebarOptions key={item.id} Icon={false} title={item.name} border={false} />
                )
            })}
        </div>
    )
}

export default Sidebar
