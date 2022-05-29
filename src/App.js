import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Main from "./Main";
import Write from "./Write";
import NotFound from "./NotFount";
import img from "./logo.png";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Header>
        <Logo
          src={img}
          onClick={() => {
            history.push("/");
          }}
        />
      </Header>
      <DotBackground>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/write" exact>
            <Write />
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
  height: 100vh;
  background: #fff;
  background-image: radial-gradient(#ddd 6%, transparent 0),
    radial-gradient(#222 6%, transparent 0);
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
`;
export default App;
