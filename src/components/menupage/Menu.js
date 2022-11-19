import React from "react";
import './Menu.css'
import ar from './AR.svg';
import game from './Game.svg';
import qs from './Qs.svg';
import about from './about.svg'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
  

function Menu() {
    const navigate = useNavigate()
    return (
        <div className="containerM">
            
            <div>
                <a href="About" className='about'>
                    <img src={about}/>
                </a>
                <header className="menu">หน้าหลัก</header>
                <div className="cardCenter">

                    <Card sx={{ minWidth: 197, minHeight: 194,borderRadius: '30px'}} onClick={()=>navigate('/ar')} className='card' >
                        <CardContent style={{backgroundColor: "#B872BA"}} className='pic'>
                            <Typography variant="h5" component="div">
                                <img src={ar}/>
                                <p>AR</p>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 197, borderRadius: '30px' }} onClick={()=>navigate('/Game')} className='card' >
                        <CardContent style={{backgroundColor: "#B872BA"}} className='pic'>
                            <Typography variant="h5" component="div">                    
                                <img src={game} />
                                <p>เกม</p>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 197, borderRadius: '30px'}} onClick={()=>navigate('/Questionaire')} className='card' >
                        <CardContent style={{backgroundColor: "#B872BA"}} className='pic'>
                            <Typography variant="h5" component="div" >
                                <img src={qs} />
                                <p>แบบสอบถาม</p>
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
                

            </div>
        </div>
    )
}

export default Menu
