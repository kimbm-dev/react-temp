import * as React from "react";
import "./App.css";
import { Foo } from "./components/Button";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    const name = "aaaa";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit HELLO !!! <code>src/App.tsx</code> and save to
          reload.
        </p>
        <a href="https://www.styled-components.com/">参考 styled.component</a>
        <Foo name={name} />
      </div>
    );
  }
}

export default App;
