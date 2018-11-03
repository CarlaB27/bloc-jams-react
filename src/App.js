import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import logo from './bloc_jams_logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <nav className="navbar">
            <div className="media">
              <img src={logo} alt="bloc jams logo" height="100" />
            </div>
            <Link className="home" to='/'>Home</Link>
            <Link className="library" to='/library'>Library</Link>
          </nav>

        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <footer>
          Carla Bates 2018
        </footer>
      </div>
    );
  }
}

export default App;
