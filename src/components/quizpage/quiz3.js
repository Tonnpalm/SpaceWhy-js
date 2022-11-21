import React from 'react';
import './/quiz3.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import home from './home.svg'
import { useNavigate } from 'react-router-dom';
import { color, style } from '@mui/system';

export default function Quiz3() {

	// const [answer1, setAnswer1] = useState('')
	// const [answer2, setAnswer2] = useState('')
	// const [answer3, setAnswer3] = useState('')
	// const [answer4, setAnswer4] = useState('')
	// const [answer5, setAnswer5] = useState('')
	// const [answer6, setAnswer6] = useState('')
	// const [answer7, setAnswer7] = useState('')
	// const [answer8, setAnswer8] = useState('')
	// const [answer9, setAnswer9] = useState('')
	// const [answer10, setAnswer10] = useState('')
	const [userpoint, setUserpoint] = useState('')

	const [currentUser,setCurrentUser] = useState();
    useEffect(() => {
    axios.get('http://localhost:3001/getusers') 
    	.then(response => {
		console.log(response.data);
		const data = response.data;
		const current = data[0]
		const lastTime = data.map(user=>user.time).sort()[data.length-1]
		setCurrentUser(data?.filter(user=>user.time===lastTime)[0])
		})
	},[])
	
	const patchAnsToBack = async() =>{
		// const put = await axios.post('http://localhost:3001/updateuserpoint', {
		// 	// ans1: answer1 ,
		// 	// ans2: answer2 , 
		// 	// ans3: answer3 ,
		// 	// ans4: answer4 ,
		// 	// ans5: answer5 ,
		// 	// ans6: answer6 ,
		// 	// ans7: answer7 ,
		// 	// ans8: answer8 ,
		// 	// ans9: answer9 ,
		// 	// ans10: answer10 ,
		// 	user_id: currentUser.user_id,
		// 	user_point: userpoint
		// })
		axios.post('http://localhost:3001/updateuserpoint', { 
            user_id: currentUser.user_id,
            user_point: userpoint
        })
		
		navigate('/menu')
	}

	const navigate = useNavigate()

	

	const questions = [
		{
			questionText: 'ดาวดวงใดเป็นศูนย์กลางของระบบสุริยะ',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '8', isCorrect: false },
			],
		},
		{
			questionText: 'ข้อใดถูกต้อง ?',
			answerOptions: [
				{ answerText: 'กาแลคซีทางช้างเผือกมีลักษณะหมุนทวนเข็มนาฬิกาหรือตามแขนของกลุ่มดาวนายพราน', isCorrect: true },
				{ answerText: 'กาแลคซีทางช้างเผือกมีลักษณะหมุนทวนเข็มนาฬิกาหรือตามหางของกลุ่มดาวจระเข้', isCorrect: false },
				{ answerText: 'กาแลคซีทางช้างเผือกมีลักษณะหมุนตามเข็มนาฬิกาหรือตามขาข้างซ้ายของกลุ่มดาวนายพราน', isCorrect: false },
				{ answerText: 'กาแลคซีทางช้างเผือกมีลักษณะหมุนตามเข็มนาฬิกาหรือตามปีกขวาของกลุ่มดาวค้างคาว', isCorrect: false },
			],
		},
		{
			questionText: 'โลก (Earth) เป็นดาวที่อยู่ในระบบสุริยะจักรวาลลำดับที่เท่าไร ?',
			answerOptions: [
				{ answerText: 'ลำดับที่ 1', isCorrect: false },
				{ answerText: 'ลำดับที่ 2', isCorrect: false },
				{ answerText: 'ลำดับที่ 3', isCorrect: true },
				{ answerText: 'ลำดับที่ 4', isCorrect: false },
			],
		},
		{
			questionText: 'ดาวดวงใดที่มีขนาดใหญ่มากที่สุด',
			answerOptions: [
				{ answerText: 'ดาวอังคาร (Mars)', isCorrect: false },
				{ answerText: 'ดาวเสาร์ (Saturn)', isCorrect: false },
				{ answerText: 'ดาวพฤหัสบดี (Jupiter)', isCorrect: true },
				{ answerText: 'ดาวยูเรนัส (Uranus)', isCorrect: false },
			],
		},
		{
			questionText: 'ดาวดวงใดอยู่ใกล้พระอาทิตย์มากที่สุด จนได้รับฉายาว่า ‘เตาไฟแช่แข็ง’ ?',
			answerOptions: [
				{ answerText: 'โลก (Earth)', isCorrect: false },
				{ answerText: 'ดาวพุธ (Mercury)', isCorrect: true },
				{ answerText: 'ดาวเสาร์ (Saturn)', isCorrect: false },
				{ answerText: 'ดาวอังคาร (Mars)', isCorrect: false },
			],
		},
		{
			questionText: 'ดาวดวงใดที่มีวงแหวนเด่นชัดเจนที่สุด ?',
			answerOptions: [
				{ answerText: 'ดาวอังคาร (Mars)', isCorrect: false },
				{ answerText: 'ดาวยูเรนัส (Uranus)', isCorrect: false },
				{ answerText: 'ดาวเนปจูน (Neptune)', isCorrect: false },
				{ answerText: 'ดาวเสาร์ (Saturn)', isCorrect: true },
			],
		},
		{
			questionText: 'ข้อใดถูกต้อง ?',
			answerOptions: [
				{ answerText: 'ดาวศุกร์ (Venus) อยู่ถัดจากดาวพฤหัส (Jupiter)', isCorrect: false },
				{ answerText: 'โลก (Earth) โคจรรอบดวงอาทิตย์เร็วกว่าดาวพุธ (Mercury)', isCorrect: false },
				{ answerText: 'ดาวเนปจูน (Neptune) โคจรรอบดวงอาทิตย์เร็วที่สุด', isCorrect: false },
				{ answerText: 'ดาวพุธ (Mercury) โคจรรอบดวงอาทิตย์เร็วกว่าโลก (Earth)', isCorrect: true },
			],
		},
		{
			questionText: 'ดาวดวงใดมีความเร็วในการโคจรรอบดวงอาทิตย์เป็นลำดับที่ 2 ?',
			answerOptions: [
				{ answerText: 'ดาวศุกร์ (Venus)', isCorrect: true },
				{ answerText: 'โลก (Earth)', isCorrect: false },
				{ answerText: 'ดาวอังคาร (Mars)', isCorrect: false },
				{ answerText: 'ไม่มีข้อใดถูกต้อง', isCorrect: false },
			],
		},
		{
			questionText: 'ข้อใดผิด ?',
			answerOptions: [
				{ answerText: 'โลกไม่มีดาวบริวาล', isCorrect: true },
				{ answerText: 'โลกเป็นดาวเคราะห์ดวงเดียวในจักรวาลที่มีสิ่งมีชีวิต', isCorrect: false },
				{ answerText: 'โลกหมุนรอบตัวเอง', isCorrect: false },
				{ answerText: 'ไม่มีข้อใดผิด', isCorrect: false },
			],
		},
		{
			questionText: 'กาแล็คซีที่ระบบสุริยะจักรวาลที่เราอาศัย อยู่ในกาแล็คซีที่มีชื่อว่าอะไร ?',
			answerOptions: [
				{ answerText: 'กาแล็คซีแอนโดรเมดา (Andromeda)', isCorrect: false },
				{ answerText: 'กาแล็คซีทางช้างเผือก (Milky way)', isCorrect: true },
				{ answerText: 'กาแล็คซีตาดำ (Black eye)', isCorrect: false },
				{ answerText: 'กาแล็คซีหมวกปีก (Sombrero)', isCorrect: false },
			],
		},
	];

	const [className, setClassName ] = useState()
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			setClassName('correct')
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setUserpoint(score+1);
		}

	};
	return (
		<div className='apps'>
			{showScore ? (
				<div className='score-section'>
					<div className="bgRank">
						<div className="header-bg">
							<div className="containerHRank">
								{/* <a href="/menu" className="imgHRank">
									<img src={home}/>    
								</a> */}
								<div className="banner-header">
									<h2 className="headHRank">คะแนน</h2>
									<img src={'icon_spaceship.png'} className="profilepic" />
									<p className="nameHRank">{currentUser&&currentUser.user_id}</p>
									<p className="pointHRank">{score}  คะแนน</p>
								</div>
							</div> 
						</div>
						<button 
							onClick={patchAnsToBack} 
							className='backMenu' 
						>
							กลับสู่หน้าหลัก
						</button>
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
							<div className="detailQ">
								<h1 className="distance1">{currentUser&&currentUser.user_id}     <img src={'icon_spaceship.png'} className="distance2" /> </h1>
							</div>
						<div className='question-count'>
							<span>คำถาม {currentQuestion + 1}</span> ใน {questions.length}
						</div>
						<div className='question-text'>
							
							<Card sx={{ minWidth: 300, minHeight: 250,borderRadius: '12px'}} className='posit1'>
								<CardContent className='cardQ'>
									<Typography  
										component="div" 
										textAlign={'center'} 
										className='posit1'
									>
										<p className='textQ'>{questions[currentQuestion].questionText}</p>
									</Typography>
								</CardContent>
							</Card>      
							
							{/* {questions[currentQuestion].questionText} */}
							
						
						</div>
						
					</div>
					<div className='answer-section'>

						
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							// <Card sx={{ minWidth: 300, maxHeight: 52,borderRadius: '30px'}} className='posit2'>
							// 	<CardContent className='choiceQ'>
							// 		<Typography  
							// 			component="div" 
							// 			textAlign={'center'} 
							// 			className='posit2'
							// 		>
							// 			<h2 className='textQ1'></h2>
							// 			<button 
							// 				onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} 
											
							// 				className='btnQuiz'
							// 			>
							// 				{answerOption.answerText}
							// 			</button>
							// 		</Typography>
							// 	</CardContent>
							// </Card>          
							className='correct' && <button 
							onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} 
							className='btnQuiz'
							>
								<h2 className='textQ1'></h2>
								{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}