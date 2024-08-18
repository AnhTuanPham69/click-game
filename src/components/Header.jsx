import { useEffect } from "react";
import { GAME_STATUS } from "../utils/commonData";
import useDuration from "../hooks/timeDuration";
import "../App.css";
import * as S from "./styled";

function Header(props) {
  const { onChangePoint, onStartGame, isFirstGame, statusGame, number } = props;
  const isEmpty = Number(number) === 0;
  const { duration, startDuration, stopDuration, resetDuration } =
    useDuration();
  const seconds = (duration / 1000).toFixed(1);

  useEffect(() => {
    if (
      statusGame === GAME_STATUS.victory ||
      statusGame === GAME_STATUS.gameOver
    ) {
      stopDuration();
    }
  }, [statusGame]);

  useEffect(() => {
    resetDuration();
  }, []);

  const handleChangePoint = (event) => {
    const value = event.target.value;
    const numberValue = Number(value);
    const isInteger = Number.isInteger(numberValue);
    if (numberValue > 10000) {
      return;
    }

    if (numberValue <= 0) {
      onChangePoint("");
      return;
    }

    onChangePoint(Math.abs(value));
    if (!isInteger) {
      onChangePoint(Math.floor(numberValue));
    }
  };

  const handleStartGame = () => {
    if (isEmpty) {
      resetDuration();
      stopDuration();
      onStartGame();
      return;
    }
    onStartGame();
    startDuration();
  };

  const handleKeyDown = (event) => {
    event.key === "Enter" && handleStartGame();
  };

  const renderStatusTitle = () => {
    if (GAME_STATUS.inGame === statusGame || isFirstGame)
      return <S.Title>LET&apos;S PLAY</S.Title>;
    if (GAME_STATUS.victory === statusGame)
      return <S.Title color="green">ALL CLEARED</S.Title>;
    return <S.Title color="red">GAME OVER</S.Title>;
  };

  return (
    <S.HeaderWrapper>
      {renderStatusTitle()}
      <div className="point-wrapper">
        <span className="label">Points</span>
        <input
          className="point-input"
          onChange={handleChangePoint}
          onKeyDown={handleKeyDown}
          value={number}
          type="number"
          step="1"
          max={10000}
        />
      </div>
      <div className="time-wrapper">
        <span className="label">Time</span>
        <span className="time-duration">{`${seconds}s`}</span>
      </div>
      <button className="action-button" onClick={handleStartGame}>
        {isFirstGame ? "Play" : "Restart"}
      </button>
    </S.HeaderWrapper>
  );
}

export default Header;
