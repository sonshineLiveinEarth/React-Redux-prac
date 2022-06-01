import React from "react";
import styled from "styled-components";
import { Eco } from "@material-ui/icons";

const Spinner = (props) => {
  return (
    <Outter>
      <Eco
        style={{
          color: "white",
          fontSize: "120px",
          marginTop: "100px",
        }}
      />
      <Load>Loading...</Load>
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #ddd;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;

const Load = styled.span`
  color: white;
  font-size: 26px;
  font-weight: bold;
`;

export default Spinner;
