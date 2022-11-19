import * as React from "react";
// import card portion
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
// import css
import './AR.css'
// import click
import { useNavigate } from 'react-router-dom';

function AR() {
    const navigate = useNavigate()
    return (
        <div className="ellipsee">
            <div className="container">
                <div className="detail">
                    <h2 className="ar">
                        AR
                    </h2>
                    {/* create Box to set size the card */}
                    <Box component="ul" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 20 }}
                        // onClick={()=>navigate('/accessCamera')}
                    >

                        {/* create card 'solar' to contain 'solar' picture and text */}
                        <Card component="li" sx={{ minWidth: 309, height: 130, flexGrow: 1 }}>
                            <CardCover>
                                <img src='solar.png'/>
                            </CardCover>
                            <CardContent className='textinpic'>
                                <Typography
                                    level="h6"
                                    fontSize={32}
                                    fontWeight="lg"
                                    textColor="#fff"
                                    mt={{ xs: 6, sm: 6 }}
                                    className='textext'
                                >
                                    ระบบสุริยะ
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* create 'earth' card to contain 'earth' picture and text */}
                        <a href="https://webxr.run/10VwaDMAk9ya6">
                            <Card component="li" sx={{ minWidth: 309, height: 130, flexGrow: 1 }}>
                                <CardCover>
                                    <img src='earth.png'/>
                                </CardCover>
                                <CardContent className='textinpic'>
                                    <Typography
                                        level="h6"
                                        fontSize={32}
                                        fontWeight="lg"
                                        textColor="#fff"
                                        mt={{ xs: 6, sm: 6 }}
                                        className='textext'
                                    >
                                        โลก
                                    </Typography>
                                </CardContent>
                            </Card>
                        </a>

                        {/* create 'milkyway' card to contain 'milkyway' picture and text */}
                        <a href="https://webxr.run/O3n4zNMY8nG7">
                            <Card component="li" sx={{ minWidth: 309, height: 130, flexGrow: 1 }}>
                                <CardCover>
                                    <img src='milky.png'/>
                                </CardCover>
                                <CardContent className='textinpic'>
                                    <Typography
                                        level="h6"
                                        fontSize={32}
                                        fontWeight="lg"
                                        textColor="#fff"
                                        mt={{ xs: 6, sm: 6 }}
                                        className='textext'
                                    >
                                        ทางช้างเผือก
                                    </Typography>
                                </CardContent>
                            </Card>
                        </a>

                        {/* create 'astronaut' card to contain 'astronaut' picture and text */}
                        <Card component="li" sx={{ minWidth: 309, height: 130, flexGrow: 1 }}>
                            <CardCover>
                                <img src='astronaut.png'/>
                            </CardCover>
                            <CardContent className='textinpic'>
                                <Typography
                                    level="h6"
                                    fontSize={32}
                                    fontWeight="lg"
                                    textColor="#fff"
                                    mt={{ xs: 6, sm: 6 }}
                                    className='textext'
                                >
                                    นักบินอวกาศ
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <div>
                        <botton onClick={()=>navigate('/Menu')} className='cancel'>
                            ยกเลิก
                        </botton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AR