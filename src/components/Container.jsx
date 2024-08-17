import "../App.css";

import * as S from "./styled";

function Container() {
  return (
    <S.Wrapper>
      <S.NumberItem style={{ top: 10, right: 20 }}>1</S.NumberItem>
      <S.NumberItem style={{ top: 20, right: 30 }}>2</S.NumberItem>
      <S.NumberItem style={{ top: 30, right: 40 }}>3</S.NumberItem>
      <S.NumberItem style={{ top: 40, right: 50 }}>4</S.NumberItem>
      <S.NumberItem style={{ top: 50, right: 60 }}>5</S.NumberItem>
    </S.Wrapper>
  );
}

export default Container;
