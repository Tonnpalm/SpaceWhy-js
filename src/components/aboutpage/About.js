import React from "react";
import './About.css'
import exit from './exit.svg'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate()
    return(
        <div className="containerAbout">
            <div className="cardContainer">
                <Card className='cardAbout' >
                    <CardContent style={{backgroundColor: "#FFF"}} className='picabout'>
                        <CardContent className="exit">
                            <img src={exit} onClick={()=> navigate('/menu')} />
                        </CardContent>
                        <Typography variant="h5" component="div">
                            <h2 className="Aboutus">เกี่ยวกับเรา</h2>
                        </Typography>
                        <Typography variant="h5" component="div" className="textAboutPostion">
                            <p className="textAbout">SPACEWHY เป็นโครงการพัฒนาซอฟต์แวร์</p>
                            <p className="textAbout">เป็นส่วนหนึ่งของการเรียนการสอนรายวิชา 2301375 S/W ENG METHOD DEV ภาคการศึกษาต้น ปีการศึกษา 2565 ภาควิชาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</p>
                            <p className="nameAbout">จัดทำโดย</p>
                            <p className="nameAbout">1. นางสาว ลภัสรดา สิริโชคสวัสดิ์</p>
                            <p className="nameAbout">2. นางสาว ปฐพร ธีรธัชกุล </p>
                            <p className="nameAbout">3. นาย พงษ์พิพัฒน์ ศรีม่วง</p>
                            <p className="nameAbout">4. นางสาว กาญจนี สถิตรังสีวงศ์ </p>
                            <p className="textAbout">ทางคณะเราได้จัดทำร่วมกับ ศูนย์วิทยาศาสตร์เพื่อการศึกษา ท้องฟ้าจำลองกรุงเทพฯ โดยท่านสามารถใช้ SPACEWHY ได้ในนิทรรศการ ห้องจักรวาลและดาวเคราะห์</p>
                            <p className="textAbout">เราหวังเป็นอย่างยิ่งว่าท่านจะได้รับความรู้ และความสนุก ในการชมนิทรรศการ ร่วมกับ SPACEWHY</p>
                            <p className="thankAbout">--------------------------THANK YOU--------------------------</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
export default About