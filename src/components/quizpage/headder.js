import React from "react";
import './headder.css'
import profile from './profile.svg'


function Headder() {
    return(
        <div className="setRow">
            <div className="detailQ">
                <h1 className="distance1">ชื่อ...     <img src={'icon_spaceship.png'} className="distance2" /> </h1>
            </div>
        </div>
    )
}
export default Headder