import React from "react";
import './qsCard.css'
import dot1 from './dot1.svg'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function QuestionCard() {
    return (
        <div className="QC">
            <Card sx={{ minWidth: 340, maxHeight: 685}} className='QNCard'>
                <CardContent className='cardQN'>
                    <Card sx={{ minWidth: 324, maxHeight: 112, borderRadius: 1}} className='insideQNCard'>
                        <CardContent className='insideCardQN'>
                            <Typography  component="div" textAlign={'center'} className='QNCard'>
                                <p className='textQNCard1'>ข้อมูลใน spacewhy มีประโยชน์ต่อการนำไปใช้</p>
                                <p className="orderPoint">
                                    <p >1</p> 
                                    <p className="order1Point">2</p> 
                                    <p className="order1Point">3</p> 
                                    <p className="order1Point">4</p>
                                    <p className="order1Point">5</p>
                                </p>
                                <p className='distanceQN2'>
                                    <img src={dot1} className=''/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                </p>
                                <p className='textQNCard'>
                                    <p>มากที่สุด</p> 
                                    <p className="lessPo">น้อยที่สุด</p>
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 324, maxHeight: 112, borderRadius: 1}} className='insideQNCard'>
                        <CardContent className='insideCardQN'>
                            <Typography  component="div" textAlign={'center'} className='QNCard'>
                                <p className='textQNCard1'>ความรู้ที่ได้รับจาก spacewhy</p>
                                <p className="orderPoint">
                                    <p >1</p> 
                                    <p className="order1Point">2</p> 
                                    <p className="order1Point">3</p> 
                                    <p className="order1Point">4</p>
                                    <p className="order1Point">5</p>
                                </p>
                                <p className='distanceQN2'>
                                    <img src={dot1} className=''/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                </p>
                                <p className='textQNCard'>
                                    <p>มากที่สุด</p> 
                                    <p className="lessPo">น้อยที่สุด</p>
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 324.84, maxHeight: 112, borderRadius: 1}} className='insideQNCard'>
                        <CardContent className='insideCardQN'>
                            <Typography  component="div" textAlign={'center'} className='QNCard'>
                                <p className='textQNCard1'>สร้างความน่าสนใจให้กับท้องฟ้าจำลอง</p>
                                <p className="orderPoint">
                                    <p >1</p> 
                                    <p className="order1Point">2</p> 
                                    <p className="order1Point">3</p> 
                                    <p className="order1Point">4</p>
                                    <p className="order1Point">5</p>
                                </p>
                                <p className='distanceQN2'>
                                    <img src={dot1} className=''/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                </p>
                                <p className='textQNCard'>
                                    <p>มากที่สุด</p> 
                                    <p className="lessPo">น้อยที่สุด</p>
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 324.84, maxHeight: 112, borderRadius: 1}} className='insideQNCard'>
                        <CardContent className='insideCardQN'>
                            <Typography  component="div" textAlign={'center'} className='QNCard'>
                                <p className='textQNCard1'>ทำให้เห็นภาพของดาวเคราะห์ชัดเจนขึ้น</p>
                                <p className="orderPoint">
                                    <p >1</p> 
                                    <p className="order1Point">2</p> 
                                    <p className="order1Point">3</p> 
                                    <p className="order1Point">4</p>
                                    <p className="order1Point">5</p>
                                </p>
                                <p className='distanceQN2'>
                                    <img src={dot1} className=''/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                </p>
                                <p className='textQNCard'>
                                    <p>มากที่สุด</p> 
                                    <p className="lessPo">น้อยที่สุด</p>
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 324.84, maxHeight: 112, borderRadius: 1}} className='insideQNCard'>
                        <CardContent className='insideCardQN'>
                            <Typography  component="div" textAlign={'center'} className='QNCard'>
                                <p className='textQNCard1'>spacewhy สร้างความสนุกในการชมนิทรรศการ</p>
                                <p className="orderPoint">
                                    <p >1</p> 
                                    <p className="order1Point">2</p> 
                                    <p className="order1Point">3</p> 
                                    <p className="order1Point">4</p>
                                    <p className="order1Point">5</p>
                                </p>
                                <p className='distanceQN2'>
                                    <img src={dot1} className=''/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                    <img src={dot1} className='picQN1'/>
                                </p>
                                <p className='textQNCard'>
                                    <p>มากที่สุด</p> 
                                    <p className="lessPo">น้อยที่สุด</p>
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 324.84, maxHeight: 112, borderRadius: 1}} className='insideQNCard'>
                        <CardContent className='insideCardQN'>
                            <Typography  component="div" textAlign={'center'} className='QNCard'>
                                <p className='textQNCard1'>ข้อเสนอแนะ</p>
                                <input
                                type="text"
                                className="inp_comment"
                                aria-describedby="emailHelp"
                                placeholder="  เขียนข้อเสนอแนะ"
                                handlePlayButton
                            />
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}
export default QuestionCard