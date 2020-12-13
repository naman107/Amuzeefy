import React from 'react'
import '../styles/sidebarOptionsStyle.css'

const SidebarOptions = ({ Icon, title, border }) => {
    return (
        <div>
            {border ?
                <div className="sidebar-options-container">
                    {Icon && <Icon className="sidebar-option-icon" />}
                    {Icon ? <h4>{title}</h4> : <p>{title}</p>}
                </div> :
                <div className="sidebar-options-container-with-playlist">
                    {Icon && <Icon className="sidebar-option-icon" />}
                    <h4>{title}</h4>
                </div>
            }
        </div>
    )
}

export default SidebarOptions
