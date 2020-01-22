import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headbar from './components/Navbar/Navbar';
import TarotCard from './components/Square/Square';
import Secondhead from './components/Header/Header'
import Tarot from './cards.json'



class App extends Component {
  state = {
    Tarot

  };

  render() {

    return (
      <div>
        <Headbar />
        <Secondhead />
        {this.state.Tarot.map(Tarot => (
          <TarotCard
            id={Tarot.id}
            image={Tarot.image}
          />
        ))}
      </div>

    )
  }
};

export default App;
