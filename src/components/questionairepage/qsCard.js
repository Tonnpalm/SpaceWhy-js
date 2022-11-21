import React, { useState } from "react";
import './qsCard.css'
import dot1 from './dot1.svg'
import dot2 from './dot2.svg'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QuestionCard() {

    const navigate = useNavigate()

    const [ questionNaire1, setQuestionNaire1 ] = useState(null)
    const [ questionNaire2, setQuestionNaire2 ] = useState(null)
    const [ questionNaire3, setQuestionNaire3 ] = useState(null)
    const [ questionNaire4, setQuestionNaire4 ] = useState(null)
    const [ questionNaire5, setQuestionNaire5 ] = useState(null)
    const [ questionNaire6, setQuestionNaire6 ] = useState(null)


    function postQNToBack() {
        axios.post('http://localhost:3001/addquestionnaireans', {
            qn1: questionNaire1 ,
            qn2: questionNaire2 ,
            qn3: questionNaire3 ,
            qn4: questionNaire4 ,
            qn5: questionNaire5 ,
            qn6: questionNaire6
        })
        navigate('/menu')
    }

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
                                    <button onClick={ () => setQuestionNaire1(1)} className='picQN2' />
                                    <button onClick={ () => setQuestionNaire1(2)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire1(3)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire1(4)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire1(5)} className='picQN1'/>
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
                                    <button onClick={ () => setQuestionNaire2(1)} className='picQN2'/>
                                    <button onClick={ () => setQuestionNaire2(2)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire2(3)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire2(4)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire2(5)} className='picQN1'/>
                                </p>
                                <h1 className='textQNCard'>
                                    <p>มากที่สุด</p> 
                                    <p className="lessPo">น้อยที่สุด</p>
                                </h1>
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
                                    <button onClick={ () => setQuestionNaire3(1)} className='picQN2'/>
                                    <button onClick={ () => setQuestionNaire3(2)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire3(3)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire3(4)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire3(5)} className='picQN1'/>                                </p>
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
                                    <button onClick={ () => setQuestionNaire4(1)} className='picQN2'/>
                                    <button onClick={ () => setQuestionNaire4(2)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire4(3)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire4(4)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire4(5)} className='picQN1'/>
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
                                    <button onClick={ () => setQuestionNaire5(1)} className='picQN2'/>
                                    <button onClick={ () => setQuestionNaire5(2)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire5(3)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire5(4)} className='picQN1'/>
                                    <button onClick={ () => setQuestionNaire5(5)} className='picQN1'/>
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
                                name="questionNaire6"
                                className="inp_comment"
                                aria-describedby="emailHelp"
                                placeholder="  เขียนข้อเสนอแนะ"
                            />
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
            <div className="er">
                <button type="submit" onClick={()=> questionNaire6 && postQNToBack } className="sendQN">
                    ส่งเลย
                </button>
            </div>
        </div>
    )
}
export default QuestionCard