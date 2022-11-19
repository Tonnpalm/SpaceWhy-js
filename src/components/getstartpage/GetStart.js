import React from 'react';
import './GetStart.css'; 
import { useNavigate } from 'react-router-dom';

function GetStart() {

    const navigate = useNavigate()
    return (
        <div className='bgGetStart'>
            <div className='container'>
                <div className='banner-con'>
                    <div className='banner-text'>
                        <h1 className='headerT'>ยินดีต้อนรับสู่ SPACEWHY</h1>
                        <img src="logo.jpg" className='logo-con' alt="" />
                        <p className='description'>พบกับการ สำรวจอวกาศ</p>
                        <p className='description2'>ด้วย Interactive AR.</p>
                        <div className='link'>
                            <botton onClick={()=>navigate('/menu')} 
                                className='getstart'   
                            >
                                เริ่มกันเลย
                                
                            </botton>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default GetStart