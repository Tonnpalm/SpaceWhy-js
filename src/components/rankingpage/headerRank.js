import React from "react";
import home from './home.svg'
import './headerRank.css'
import { useNavigate } from 'react-router-dom';

function headerRank() {

    return (

        <div className="header-bg">
            <div className="containerHRank">
                <a href="/menu" className="imgHRank">
                    <img src={home}/>    
                </a>
                <div className="banner-header">
                    <h2 className="headHRank">ลำดับคะแนน</h2>
                    <img src={'icon_spaceship.png'} className="profilepic" />
                    <p className="nameHRank">ชื่อผู้เล่น</p>
                    <p className="pointHRank">POINT</p>
                </div>
            </div> 
        </div>
    )
}
export default headerRank