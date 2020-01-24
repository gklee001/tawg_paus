import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headbar from './components/Navbar/Navbar';
import TarotCard from './components/TarotCard/TarotCard';
import Secondhead from './components/Header/Header'
import Tarot from './cards.json'



class App extends Component {
  state = {
    Tarot,
    score: 0,
    moves: [],


    //need to look into the object of a state
  };

  updateScore = id => {
    console.log("this is the id ", this.state.moves.id);
    let move = this.state.moves;
    for (var i = 0; i < move.length; i++) {
      if (move[i] === id) {
        console.log("game over")
      }

    }


    this.setState(state => {
      const moves = state.moves.concat(id);
      console.log(moves)
      return {
        moves
      }

    })

    // if (this.state.moves.id === 0) {

    //   this.setState({ moves: this.state.moves.id === 1 });
    //   console.log("you lose")


    // }



    this.setState(prevState => {
      return { score: prevState.score + 1 }
    })
    console.log("this is your score ", this.state.score)
  }
  render() {

    return (
      <div>
        <Headbar />
        <Secondhead />
        {this.state.Tarot.map(Tarot => (
          <TarotCard
            id={Tarot.id}
            image={Tarot.image}
            updateScore={this.updateScore}
          />
        ))}

      </div>


    )

  }
};

export default App;
