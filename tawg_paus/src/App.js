import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Navbar/Navbar';
import TarotCard from './components/TarotCard/TarotCard';
import Secondhead from './components/Header/Header'
import Tarot from './cards.json'
import Score from './components/Score/Score'




class App extends Component {
  state = {
    Tarot,
    score: 0,
    moves: [],
    tScore: 20

    //need to look into the object of a state
  };

  updateScore = id => {
    console.log("this is the id ", this.state.moves.id);
    let move = this.state.moves;
    for (var i = 0; i < move.length; i++) {
      if (move[i] === id) {
        console.log("game over");

        this.setState(prevState => {
          return { score: 0 }
        })
        this.setState(state => {
          return { moves: [] }
        })
        return;
      }

    }


    this.setState(state => {
      const newArr = state.moves.concat(id);
      console.log(newArr)
      return {
        moves: newArr
      }

    })




    this.setState(prevState => {
      return { score: prevState.score + 1 }
    })
    console.log("this is your score ", this.state.score)
  }
  render() {

    return (
      <div>
        <Headbar />
        <Score
          score={this.state.score}
          tScore={this.state.tScore}></Score>
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
