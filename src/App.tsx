import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    const style = {
      color: "red"
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={style}>
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit HELLO !!! <code>src/App.tsx</code> and save to
          reload.
        </p>
        <a href="https://www.styled-components.com/">参考 styled.component</a>
      </div>
    );
  }
}

export default App;
