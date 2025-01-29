import React from "react"
import { useState } from "react";
import Information from "./components/Information"
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
  

  const handleSubmit = (data) => {
    setUserData(data);
  };

  return (
    <>
      <Information onSubmit={handleSubmit}/>
    </>
  )
}

export default App
