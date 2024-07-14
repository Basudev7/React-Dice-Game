import React from "react";
import dicesImage from "../assets/images/dices.png"; // Adjust the path as necessary

const Home = ({ homePage, setHomePage }) => {
  const playNow = () => {
    setHomePage(true);
  };

  return (
    <section id="home">
      <div className="diceImg">
        <img src={dicesImage} alt="Dice Image" />
      </div>
      <div className="playNow">
        <h1>DICE GAME</h1>
        <button onClick={playNow}>Play Now</button>
      </div>
    </section>
  );
};

export default Home;
