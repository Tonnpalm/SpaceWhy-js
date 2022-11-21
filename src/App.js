import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';

//PageRoute
import GetStart from './components/getstartpage/GetStart';
import Menu from './components/menupage/Menu';
import About from './components/aboutpage/About';
import AR from './components/arpage/AR';
import Game from './components/gamepage/Game';
import Questionaire from './components/questionairepage/Questionaire';
import AfterQN from './components/questionairepage/afterQN'
import Quiz1 from './components/quizpage/quiz1';
import Quiz3 from './components/quizpage/quiz3';
import Rank from './components/rankingpage/rank';


function App() {
    return (
        <Routes>
          <Route path='/' element={<GetStart />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about' element={<About />} />
          <Route path='ar' element={<AR />} />
          <Route path='game' element={<Game />} />
          <Route path='questionaire' element={<Questionaire />} />
          <Route path='afterqn' element={<AfterQN />} />
          <Route path='quiz1' element={<Quiz1 />} />
          <Route path='quiz3' element={<Quiz3 />} />
          <Route path='rank' element={<Rank />} />
        </Routes>
    )
}
export default App;