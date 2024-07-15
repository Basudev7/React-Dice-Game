import React, { useContext, useState } from "react";
import DiceCube1 from "../assets/images/dice_1.png";
import DiceCube2 from "../assets/images/dice_2.png";
import DiceCube3 from "../assets/images/dice_3.png";
import DiceCube4 from "../assets/images/dice_4.png";
import DiceCube5 from "../assets/images/dice_5.png";
import DiceCube6 from "../assets/images/dice_6.png";
import { DicesContext } from "../store/ContextData"; // Fix the import here
import Rules from "./Rules";

const GameRoles = ({ selectBtn, setSelectBtn }) => {
  // console.log(Math.random(0, 10));
  const [dice, setDice] = useState(DiceCube1);
  const { score, setScore } = useContext(DicesContext);
  const [showRulesPermission, setShowRulesPermission] = useState(false);
  const { chances, setChances } = useContext(DicesContext);

  const RollDice = () => {
    if (selectBtn === 0) {
      alert("Select a number first");
      return false;
    }
    const choices = [
      DiceCube1,
      DiceCube2,
      DiceCube3,
      DiceCube4,
      DiceCube5,
      DiceCube6,
    ];

    let choice = Math.floor(Math.random() * choices.length);

    // console.log(choices[choice]);
    setDice(choices[choice]);
    console.log(choice + 1);
    if (selectBtn === choice + 1) {
      setScore(score + selectBtn);
    } else {
      setScore(score - 2);
    }

    if (score === 20) {
      alert("You've Won");
      setScore(0);
    } else if (score < -20) {
      alert("You can't go more down");
      setScore(0);
    }

    setChances(chances - 1);
    if (chances === 0) {
      alert("You have no more chances");
      setChances(10);
      setScore(0);
      return false;
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  const showRules = () => {
    console.log(showRulesPermission);
    setShowRulesPermission(true);
  };

  return (
    <div id="mainGame">
      <h2 className="chances">Chances Left : {chances}</h2>
      <img src={dice} onClick={RollDice} alt="Roll Dice" />
      <p>Click on Dice to roll</p>
      <button onClick={resetScore}>Reset Score</button> <br />
      <button onClick={showRules}>Show Rules</button>
      {showRulesPermission === true && <Rules />}
    </div>
  );
};

export default GameRoles;
