import React, { useState } from "react";import './Questionair.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Questionaire() {

    const navigate = useNavigate()

    const [ questionNaire1, setQuestionNaire1 ] = useState('')
    const [ questionNaire2, setQuestionNaire2 ] = useState('')
    const [ questionNaire3, setQuestionNaire3 ] = useState('')
    const [ questionNaire4, setQuestionNaire4 ] = useState('')
    const [ questionNaire5, setQuestionNaire5 ] = useState('')
    const [ name, setName ] = useState('')


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setQuestionNaire1(event.target[0].value)  
    //     setQuestionNaire2(event.target[1].value)  
    //     setQuestionNaire3(event.target[2].value)  
    //     setQuestionNaire4(event.target[3].value)  
    //     setQuestionNaire5(event.target[4].value)  
    //     setQuestionNaire6(event.target[5].value)  
    // }
    function postQNToBack() {
        axios.post('http://localhost:3001/addquestionnaireans', {
            qn1: questionNaire1 ,
            qn2: questionNaire2 ,
            qn3: questionNaire3 ,
            qn4: questionNaire4 ,
            qn5: questionNaire5 ,
            qn6: name
        })
        navigate('/afterqn')
    }

    return (
        <div className="containerQN">
            <header className="distanceQN">
                <h2 className="textQN">แบบสอบถาม</h2>
            </header>
            <div className="QC">
                <form className="formChar">
                    <Card sx={{ minWidth: 30, maxHeight: 690, borderRadius: 1}} className='QNCard'>
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
                                        <fieldset id='fav_language1' className='distanceQN2'>
                                            <input type="radio" id="html" name="fav_language1" value="1" onClick={ e => setQuestionNaire1(e.target.value)}/>
                                            <input type="radio" id="html" name="fav_language1" value="2" onClick={ e => setQuestionNaire1(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language1" value="3" onClick={ e => setQuestionNaire1(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language1" value="4" onClick={ e => setQuestionNaire1(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language1" value="5" onClick={ e => setQuestionNaire1(e.target.value)} className='picQN1'/>
                                            {/* <button onClick={ () => setQuestionNaire1(1)} className='picQN2' />
                                            <button onClick={ () => setQuestionNaire1(2)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire1(3)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire1(4)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire1(5)} className='picQN1'/> */}
                                        </fieldset>
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
                                        <fieldset id='fav_language2' className='distanceQN2'>
                                            <input type="radio" id="html" name="fav_language2" value="1" onClick={ e => setQuestionNaire2(e.target.value)}/>
                                            <input type="radio" id="html" name="fav_language2" value="2" onClick={ e => setQuestionNaire2(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language2" value="3" onClick={ e => setQuestionNaire2(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language2" value="4" onClick={ e => setQuestionNaire2(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language2" value="5" onClick={ e => setQuestionNaire2(e.target.value)} className='picQN1'/>
                                            {/* <button onClick={ () => setQuestionNaire2(1)} className='picQN2'/>
                                            <button onClick={ () => setQuestionNaire2(2)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire2(3)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire2(4)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire2(5)} className='picQN1'/> */}
                                        </fieldset>
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
                                        <fieldset id='fav_language3' className='distanceQN2'>
                                            <input type="radio" id="html" name="fav_language3" value="1" onClick={ e => setQuestionNaire3(e.target.value)} />
                                            <input type="radio" id="html" name="fav_language3" value="2" onClick={ e => setQuestionNaire3(e.target.value)}className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language3" value="3" onClick={ e => setQuestionNaire3(e.target.value)}className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language3" value="4" onClick={ e => setQuestionNaire3(e.target.value)}className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language3" value="5" onClick={ e => setQuestionNaire3(e.target.value)}className='picQN1'/>
                                            {/* <button onClick={ () => setQuestionNaire3(1)} className='picQN2'/>
                                            <button onClick={ () => setQuestionNaire3(2)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire3(3)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire3(4)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire3(5)} className='picQN1'/>*/}
                                        </fieldset>
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
                                        <fieldset id='fav_language4' className='distanceQN2'>
                                            <input type="radio" id="html" name="fav_language4" value="1" onClick={ e => setQuestionNaire4(e.target.value)}/>
                                            <input type="radio" id="html" name="fav_language4" value="2" onClick={ e => setQuestionNaire4(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language4" value="3" onClick={ e => setQuestionNaire4(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language4" value="4" onClick={ e => setQuestionNaire4(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language4" value="5" onClick={ e => setQuestionNaire4(e.target.value)}className='picQN1'/>
                                            {/* <button onClick={ () => setQuestionNaire4(1)} className='picQN2'/>
                                            <button onClick={ () => setQuestionNaire4(2)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire4(3)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire4(4)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire4(5)} className='picQN1'/> */}
                                        </fieldset>
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
                                        <fieldset id='fav_language5' className='distanceQN2'>
                                            <input type="radio" id="html" name="fav_language5" value="1" onClick={ e => setQuestionNaire5(e.target.value)}/>
                                            <input type="radio" id="html" name="fav_language5" value="2" onClick={ e => setQuestionNaire5(e.target.value)} className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language5" value="3" onClick={ e => setQuestionNaire5(e.target.value)}className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language5" value="4" onClick={ e => setQuestionNaire5(e.target.value)}className='picQN1'/>
                                            <input type="radio" id="html" name="fav_language5" value="5" onClick={ e => setQuestionNaire5(e.target.value)} className='picQN1'/>
                                            {/* <button onClick={ () => setQuestionNaire5(1)} className='picQN2'/>
                                            <button onClick={ () => setQuestionNaire5(2)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire5(3)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire5(4)} className='picQN1'/>
                                            <button onClick={ () => setQuestionNaire5(5)} className='picQN1'/> */}
                                        </fieldset>
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
                                            name="name"
                                            onChange={ e => setName(e.target.value)}
                                            className="inp_comment"
                                            aria-describedby="emailHelp"
                                            placeholder="  เขียนข้อเสนอแนะ"
                                        />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </form>
                <div className="er">
                    <button 
                        type="submit" 
                        onClick={postQNToBack} 
                        className="sendQN">
                        ส่งเลย
                    </button>
                </div>
            </div>
        </div>
        
    )
}
export default Questionaire