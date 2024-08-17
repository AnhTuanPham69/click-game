import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  position: relative;
  border: 1px solid grey;
  border-radius: 8px;
  margin-top: 20px;
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
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: red;
  }
`;
