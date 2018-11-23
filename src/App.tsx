import * as React from "react";
import "./App.css";
import { Button, Input, Textarea, Header } from './components';
import logo from "./logo.svg";

class App extends React.Component {
  /**
   * 
   */
  public hello(): void {
    alert('hello');
  }

  public render() {
    const type = 'password';
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit HELLO !!! <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://www.styled-components.com/">
          参考 styled.component
        </a>
      <Button onClick={this.hello} >Button</Button>
      <Input type={type} />
      <Input type={'text'} />
      <Textarea cols={40} />
      <Header >hello</Header>
      </div>;
  };
}

export default App;
