import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import img from "./plus.png";
import Card from "./Card";

const Main = () => {
  const history = useHistory();
  return (
    <>
      <Div />
      <Wrap>
        <Card />
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
  align-items: stretch;
  flex-wrap: wrap-reverse;
  overflow: visible;
`;

const Div = styled.div`
  width: 100%;
  height: 100px;
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

const Plus = styled.img`
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease-in-out;

  z-index: 1;
  &:hover {
    transform: rotate(90deg);
  }
`;

export default Main;
