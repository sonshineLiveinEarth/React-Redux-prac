import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Write = (props) => {
  const history = useHistory();
  return (
    <>
      <Wrap>
        <Title>단어 추가하기</Title>
        <p>단어</p>
        <

        <button
          onClick={() => {
            history.push("/");
          }}
        >
          저장하기
        </button>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin: 40px auto;
`;

export default Write;
