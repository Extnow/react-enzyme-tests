import React, { Component } from 'react';
import styled from 'styled-components';

export const Header = styled.div``;

const Title = ({ text }) => <>{text}</>;

class App extends Component {
  render() {
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
        <Title text="hello" />
      </div>
    );
  }
}

export default App;
