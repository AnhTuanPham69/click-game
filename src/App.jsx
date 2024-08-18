import { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import { GAME_STATUS } from "./utils/commonData";
import "./App.css";

function App() {
  const [statusGame, setStatusGame] = useState(GAME_STATUS.inGame);
  const [numberOfPoint, setNumberOfPoint] = useState(0);
  const [number, setNumber] = useState(0);
  const [isFirstGame, setIsFirstGame] = useState(true);
  const [resetStatus, setResetStatus] = useState(true);

  const handleChangeGameStatus = (status) => {
    setStatusGame(status);
  };

  const handleStartGame = () => {
    setIsFirstGame(Number(number) === 0);
    setResetStatus(!resetStatus);
    setNumberOfPoint(number);
    setStatusGame(GAME_STATUS.inGame);
  };

  const handleChangePoint = (point) => {
    setNumber(point);
  };

  useEffect(() => {
    setIsFirstGame(true);
    setNumber(0);
    setNumberOfPoint(0);
  }, []);

  return (
    <div>
      <Header
        statusGame={statusGame}
        onChangePoint={handleChangePoint}
        isFirstGame={isFirstGame}
        number={number}
        onStartGame={handleStartGame}
        numberOfPoint={numberOfPoint}
      />
      <Container
        onChangeGameStatus={handleChangeGameStatus}
        statusGame={statusGame}
        numberOfPoint={numberOfPoint}
        resetStatus={resetStatus}
      />
    </div>
  );
}

export default App;
