import React from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";

import img from "./plus.png";

const Main = () => {
  const history = useHistory();
  return (
    <>
      <Wrap>
        <Card_box>
          <Ul>
            <Li1>Hello</Li1>
            <Li>[hello]</Li>
            <Li3>안녕</Li3>
            <Li>hello, rtan!</Li>
            <Li>안녕, 르탄!</Li>
          </Ul>
        </Card_box>
      </Wrap>

      <PlusBtn
        onClick={() => {
          history.push("/write");
        }}
      >
        <Plus src={img}></Plus>
      </PlusBtn>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Card_box = styled.div`
  background-color: transition;
  border: 1px solid black;
  border-radius: 8px;
  min-width: 300px;
  max-width: 400px;
  width: 90%;
  height: 140px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 20px;

  &:hover {
    box-shadow: 5px 5px 20px #e6e6e6;
  }
`;

const Ul = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Li1 = styled.li`
  display: flex;
  font-size: 30px;
  margin: 2px;
  font-weight: bold;
`;

const Li3 = styled.li`
  display: flex;
  font-size: 18px;
  margin: 2px;
  font-weight: bold;
`;

const Li = styled.li`
  display: flex;
  font-size: 18px;
  margin: 2px;
`;

const PlusBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: black;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 3px 3px 20px #bbb;
  }
`;

const Plus_spin = keyframes`
0% {
    transform: rotate(0deg);
}
30% {
    transform: rotate(30deg);
}
100% {
    transform: rotate(90deg);
}
`;

const Plus = styled.img`
  width: 28px;
  height: 28px;

  z-index: 1;
  &:hover {
    animation: ${Plus_spin} 0.25s linear;
    animation-iteration-count: 1;
  }
`;

export default Main;
