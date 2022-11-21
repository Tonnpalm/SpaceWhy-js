import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Game.css'

import toast, { Toaster } from 'react-hot-toast';

  
function Game(e) {
    const notify = () => toast('error');
    //กดปุ่มแล้วไปหน้าอื่น ๆ
    const navigate = useNavigate()
    //กดปุ่มแล้วเก็บชื่อผู้เล่น
    const [ name, setName ] = useState('')
    const createdAt= new Date();
    function handlePlayButton() {
        console.log(createdAt)
        axios.post('http://localhost:3001/adduser_id', { 
            user_id: name,
            createdAt
        })
        navigate('/quiz3')
    };
    

    return (
        <div className="bg-blur1">
            <div className="container">
                <div className="topic">
                    <h1 className="head">เกมตอบ คำถาม</h1>
                    <p className="head2">เลือกตอบคำถามที่ถูกต้อง</p>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                name= "name"
                                onChange={ e => setName(e.target.value)}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="ใส่ชื่อ"
                            />
                        </div>
                        <div className="btnAll">
                            <button 
                                type="submit" 
                                onClick={name && handlePlayButton}
                                className="btn1spec"
                            >
                                เล่น
                            </button>
                            <Toaster />
                            <button 
                                type="cancel" 
                                onClick={()=>navigate('/menu')} 
                                className="btn2spec"
                            >
                                ยกเลิก
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>   
        </div>
    )
}
export default Game
// ()=>name && navigate('/quiz')