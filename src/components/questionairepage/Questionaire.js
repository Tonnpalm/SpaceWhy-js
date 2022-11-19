import React from "react";
import './Questionair.css'

import dot1 from './dot1.svg'

import QuestionCard from "./qsCard";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Questionaire() {

    const navigate = useNavigate()

    return (
        <div className="containerQN">
            <header className="distanceQN">
                <h2 className="textQN">แบบสอบถาม</h2>
                <QuestionCard />
                <div className="er">
                    <button type="submit" onClick={()=>navigate('/menu')} className="sendQN">
                        ส่งเลย
                    </button>
                </div>
            </header>
        </div>
    )
}
export default Questionaire