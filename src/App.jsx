import { useContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Myprovider, { DicesContext } from "./store/ContextData"; // Correct import
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Game from "./components/Game";
// const DisplayValue = () => {
//   const { newDice } = useContext(DicesContext);
//   console.log(newDice);
//   return <p>This is the value: {newDice}</p>;
// };

function App() {
  const [homePage, setHomePage] = useState(false);

  return (
    <>
      <Myprovider>
        <div className="container">
          {homePage != false ? (
            <Game homePage={homePage} setHomePage={setHomePage} />
          ) : (
            <Home homePage={homePage} setHomePage={setHomePage} />
          )}
        </div>
      </Myprovider>
    </>
  );
}

export default App;
