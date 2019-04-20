import React, { Component } from 'react';
import styled from 'styled-components';

export const Header = styled.div``;

class App extends Component {
  state = {
    mainColor: 'blue',
  };

  render() {
    const { mainColor } = this.state;

    return (
      <div className="App">
        <Header className="App-header">
          <img className="App-logo" alt="logo" />
          <p className="App-intro">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
        <h1 className={mainColor}>Hello</h1>
      </div>
    );
  }
}

export default App;
