import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from './Link';
import { Checkbox } from './Checkbox';

export const Header = styled.div``;

class App extends Component {
  state = {
    mainColor: 'blue',
    on: false,
    input: '',
    lifecycle: ''
  };

  componentDidMount() {
    this.setState({ lifecycle: 'componentDidMount' });
  }

  handleStringHello = str => {
    if (str === 'hello') {
      return true;
    }
    return false;
  };

  render() {
    const { mainColor, on, input, lifecycle } = this.state;

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
        <h1 className={mainColor}>{input}</h1>
        <input onChange={e => this.setState({ input: e.currentTarget.value })} type="text" />
        <span className="button-state">{on ? 'YES' : 'NO'}</span>
        <button onClick={() => this.setState({ on: true })}>Клик</button>
        <div className="lifecycle">{lifecycle}</div>
        <Link address="https://github.com/Extnow" hide={false} />
        <Checkbox data-testid="checked" checked={true} />
      </div>
    );
  }
}

export default App;
