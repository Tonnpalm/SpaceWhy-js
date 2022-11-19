import React from "react";
import './cardRank.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function cardRank() {
    return(
        <div className="marginTop">
            <Card sx={{ minWidth: 329, maxHeight: 66, borderRadius: 1}} className='cardRank'>
                <CardContent className='insideRankCard'>
                    <Typography  component="div" textAlign={'center'} paddingBottom={0} className='RankCard'>
                        <p className="orderRank">1</p>
                        <p className='textRanking'><img src={'icon_spaceship.png'} className='sizePicRank' />ชื่อผู้เล่น</p>
                        <p className="pointInRankcard">5</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default cardRank