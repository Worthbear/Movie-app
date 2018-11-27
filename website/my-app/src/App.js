import React, { Component } from 'react';

//Components
import Header from './components/headerComponent/header';
import RandomFilm from './components/pages/randomfilm/randomFilm';


// Includes
import './Assets/css/default.min.css';




class App extends Component {
  render() {
    return (
      <div >
      <Header />
      <RandomFilm />
      </div>
    );
  }
}

export default App;
