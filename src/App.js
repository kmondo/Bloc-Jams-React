import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import styled from 'styled-components';

const Div= styled.div`
background: linear-gradient(black, silver);
`;
const Nav = styled.nav`
  color: automatic;
  font-size: 1em;
  font-family:
`;

const H1 = styled.h1`
  color: white;
  font-size: 4em;
  font-variant: small-caps;
`;

class App extends Component {
  render() {
    return (
      <Div className="App">
        <header>
          <Nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </Nav>
          <H1>Bloc Jams</H1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </Div>
    );
  }
}

export default App;
