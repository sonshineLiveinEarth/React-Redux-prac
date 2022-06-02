import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import img from "./plus.png";
import Card from "./Card";

const Main = () => {
  const history = useHistory();
  return (
    <>
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
  width: 90%;
  max-width: 1400px;
  margin: 80px auto auto auto;

  display: grid;
  grid-auto-rows: 170px;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 0px;
  justify-content: center;
  flex-flow: wrap;
  grid-gap: 20px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  } ;
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
