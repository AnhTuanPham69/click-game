import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  position: relative;
  border: 1px solid grey;
  border-radius: 8px;
  margin-top: 20px;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: ${({ color }) => color || "black"};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .point-wrapper,
  .time-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .point-input {
    width: 300px;
    border-radius: 8px;
    padding: 10px;
  }
`;

export const NumberItem = styled.div`
  border-radius: 50%;
  border: 1px solid;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ isWaiting }) => (isWaiting ? "red" : "white")};
  cursor: pointer;
`;
