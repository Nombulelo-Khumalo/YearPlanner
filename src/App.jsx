import React from "react"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Journal from "./components/UserInput/Journal";
import AI from "./components/FetchInput/AI";
import Analysis from "./components/FetchInput/Analysis";
import Board from "./components/FetchInput/Board";
import Home from "./components/FetchInput/Home";


function App() {

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    yearGoal: '',
    firstQuarterGoal: '',
    MonthOneGoal: '',
    MonthTwoGoal: '',
    MonthThreeGoal: '',
    secondQuarterGoal: '',
    MonthFourGoal: '',
    MonthFiveGoal: '',
    MonthSixGoal: '',
    thirdQuarterGoal: '',
    MonthSevenGoal: '',
    MonthEightGoal: '',
    MonthNineGoal: '',
    fourthQuarterGoal: '',
    MonthTenGoal: '',
    MonthElevenGoal: '',
    MonthTwelveGoal: '',
  });
  

  // const handleSubmit = (data) => {
  //    setUserData(data);
  //  };

  return (
     <>
      <div>
        <Menu/>
        <div>
         <Routes>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/journal' element={<Journal/>}/>
          <Route path="/ai" element={<AI/>}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/board" element={<Board/>}/>
          <Route path="/" element={<Home/>}/>
         </Routes>
        </div>
        <Navbar/>
      </div>
    </>
  )
}

export default App
