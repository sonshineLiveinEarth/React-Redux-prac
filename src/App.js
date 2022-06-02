import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import Main from "./Main";
import Write from "./Write";
import NotFound from "./NotFount";
import Modifi from "./Modifi";
import Spinner from "./Spinner";
import img from "./logo.png";

// import { loadMemoFB } from "./redux/modules/memo";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.memo.is_loaded);

  return (
    <div className="App">
      {!is_loaded && <Spinner />}

      <Header>
        <Logo
          src={img}
          onClick={() => {
            history.push("/");
          }}
        />
      </Header>
      <DotBackground>
        {" "}
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/write" exact>
            <Write />
          </Route>
          <Route path="/write/modifi/:words" exact>
            <Modifi />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </DotBackground>
    </div>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: white;
  width: 100vw;
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
  heigh: 20px;
`;

const DotBackground = styled.div`
  background: #fff;
  background-image: radial-gradient(#ddd 6%, transparent 0),
    radial-gradient(#222 6%, transparent 0);
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;

  // display: grid;
  // grid-template-columns: 40px 1fr 40px;
  // grid-template-rows: 100px minmax(140px, auto);
  // gap: 20px;
`;
export default App;
