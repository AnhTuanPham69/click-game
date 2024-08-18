import { useEffect, useRef, useState } from "react";
import { GAME_STATUS } from "../utils/commonData";

import "../App.css";
import * as S from "./styled";

function Container(props) {
  const {
    numberOfPoint = 0,
    onChangeGameStatus,
    resetStatus,
    statusGame,
  } = props;
  const [randomPositions, setRandomPositions] = useState([]);
  const [waitingPositions, setWaitingPositions] = useState([]);
  const timeoutRef = useRef(null);
  const maxTop = 458;
  const maxRight = 458;
  const isGameOver = statusGame === GAME_STATUS.gameOver;

  useEffect(() => {
    setRandomPositions(
      Number(numberOfPoint) === 0 ? [] : createRandomArray(numberOfPoint)
    );
  }, [numberOfPoint, resetStatus]);

  useEffect(() => {
    if (waitingPositions.length === 0 && randomPositions.length === 0) {
      onChangeGameStatus(GAME_STATUS.victory);
    }

    timeoutRef.current = setTimeout(() => {
      const newWaitingPositions =
        waitingPositions.length > 0 ? waitingPositions.slice(1) : [];

      setWaitingPositions(newWaitingPositions);
    }, 500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [randomPositions.length, waitingPositions.length]);

  const createRandomArray = (num) => {
    return Array.from({ length: num }, (_, index) => ({
      top: Math.floor(Math.random() * maxTop),
      right: Math.floor(Math.random() * maxRight),
      value: num - index,
    }));
  };

  const handleSelectNumber = (number) => () => {
    if (number.value === randomPositions[randomPositions.length - 1].value) {
      const newWaitingArr = [...waitingPositions, number];
      const newArr = randomPositions.filter((it) => it.value !== number.value);
      setWaitingPositions(newWaitingArr);
      setRandomPositions(newArr);
    } else if (
      waitingPositions[waitingPositions.length - 1].value + 1 !==
      number.value
    ) {
      onChangeGameStatus(GAME_STATUS.gameOver);
    }
  };

  return (
    <S.Wrapper>
      {randomPositions.map((it) => (
        <S.NumberItem
          style={{ top: it.top, right: it.right }}
          key={it.value}
          onClick={isGameOver ? undefined : handleSelectNumber(it)}
          isWaiting={waitingPositions.includes(it.value)}
        >
          {it.value}
        </S.NumberItem>
      ))}
      {waitingPositions.map((it) => (
        <S.NumberItem
          style={{ top: it.top, right: it.right }}
          key={`waiting-${it.value}`}
          isWaiting={true}
        >
          {it.value}
        </S.NumberItem>
      ))}
    </S.Wrapper>
  );
}

export default Container;
