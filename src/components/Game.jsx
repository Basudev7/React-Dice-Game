import React, { useContext, useEffect, useState } from "react";
import GameRoles from "./GameRoles";
import Rules from "./Rules";
import { DicesContext } from "../store/ContextData"; // Fix the import here
import Warning from "./Warning";

const Game = () => {
  const choices = [1, 2, 3, 4, 5, 6];
  const { score, setScore } = useContext(DicesContext);
  const [selectBtn, setSelectBtn] = useState(0);

  useEffect(() => {
    console.log(selectBtn);
  });

  return (
    <section id="game">
      <div id="gameContainer">
        <div className="score">
          <p>
            <b style={{ fontSize: "60px" }}> {score}</b> <br />
            Total Score
          </p>
        </div>

        <div className="selectNumber">
          {selectBtn === 0 && <Warning />}

          {choices.map((choice) => (
            <button
              style={
                selectBtn === choice
                  ? { background: "#000", color: "#fff" }
                  : { background: "#fff", color: "#000" }
              }
              onClick={() => {
                setSelectBtn(choice);
              }}
              key={choice}
            >
              <b>{choice}</b>
            </button>
          ))}
          <p>
            <b>Selet a Number</b>
          </p>
        </div>
      </div>
      <GameRoles selectBtn={selectBtn} setSelectBtn={setSelectBtn} />
    </section>
  );
};

export default Game;
