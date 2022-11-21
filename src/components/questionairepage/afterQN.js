import React from "react";
import './afterQN.css'
import thanks from './thanks.svg'
import { useNavigate } from 'react-router-dom';

function AfterQN() {

    const navigate = useNavigate()


    return(
        <div className="containerAfterQN">
            <div className="detailInThanks">
                <img src={thanks} className="imgTick"/>
                <h2 className="textInThank">ขอบคุณ</h2>
                <h2 className="textInThank">ที่ส่งคำตอบ</h2>
                <button onClick={() => navigate('/menu')} className="btnBack">กลับสู่หน้าหลัก</button>
            </div>
        </div>
    )
}
export default AfterQN