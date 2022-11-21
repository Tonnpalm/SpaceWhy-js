import React from "react";
import './quiz1.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import next from './next.svg'
import Headder from "./headder";

import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Quiz1() {
    function postToBack(ans, index) {
         axios.post ('http://localhost:3001/', { 
             ans1 : 'ถูก' 
        })

    }
    const navigate = useNavigate()
    const [ ans, setAns ] = useState(null)
    const [ post, setPost ] = useState(null)
    const handleAns = (ans, index) => {
        if (ans==post[index].ans){
            console.log('ถูก')
        }
        else 
            console.log('ผิด')
            navigate('/quiz2')
        
    }
    useEffect(() => {
        axios.get('http://localhost:3001/getquestion') 
        .then(response => {
            setPost(response.data)
            console.log(response.data);
        }) 
    }, [])

    function putAnsToBack() {
        axios.post('http://localhost:3001/adduser_id', { 
            ans1: '123'
        })
    };

    if (!post) return null
    
    return(
        <div>
            <Headder className="try" />
            <div className="detailQ"> 
                <div className='posit'>
                    <p className="distance3">คำถาม {post[0].question_no} ใน 10</p>
                    <div>
                        <Card sx={{ minWidth: 300, minHeight: 250,borderRadius: '12px'}} className='posit1'>
                            <CardContent className='cardQ'>
                                <Typography  
                                    component="div" 
                                    textAlign={'center'} 
                                    className='posit1'
                                >
                                    <p className='textQ'>{post[0].question}</p>
                                </Typography>
                            </CardContent>
                        </Card>      
                        <Card sx={{ minWidth: 300, maxHeight: 52,borderRadius: '30px'}} className='posit2'
                        onClick = {()=>handleAns(post[0].c1,0)}>
                            <CardContent className='choiceQ'>
                                <Typography  
                                    component="div" 
                                    textAlign={'center'} 
                                    className='posit2'
                                >
                                    <h2 className='textQ1'>A</h2>
                                    <p className='textQ2'>{post[0].c1}</p>
                                </Typography>
                            </CardContent>
                        </Card>                                         
                        <Card sx={{ minWidth: 300, maxHeight: 52,borderRadius: '30px'}} className='posit2'
                        onClick = {()=> handleAns(post[0].c2,0)}>
                            <CardContent className='choiceQ'>
                                <Typography  
                                    component="div" 
                                    textAlign={'center'}   
                                    className='posit2'
                                >
                                    <h2 className='textQ1'>B</h2>
                                    <p className='textQ2'>{post[0].c2}</p>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 300, maxHeight: 52,borderRadius: '30px'}} className='posit2'
                        onClick = {()=> handleAns(post[0].c3,0)}>
                            <CardContent className='choiceQ'>
                                <Typography  
                                    component="div" 
                                    textAlign={'center'}
                                    className='posit2'
                                >
                                    <h2 className='textQ1'>C</h2>
                                    <p className='textQ2'>{post[0].c3}</p>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 300, maxHeight: 52,borderRadius: '30px'}} className='posit2'
                        onClick = {()=> handleAns(post[0].c4,0)}>
                            <CardContent className='choiceQ'>
                                <Typography  component="div" textAlign={'center'} className='posit2'>
                                    <h2 className='textQ1'>D</h2>
                                    <p className='textQ2'>{post[0].c4}</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <footer>
                    <img src={next} className="posss" />
                </footer>
            </div>
        </div>
    )
}
export default Quiz1