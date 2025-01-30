import React from "react"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu";


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
     <Router>
      <div>
        <Menu/>
        <div>
         <Routes>
          <Route path='/menu' element={<Menu/>}/>
         </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
