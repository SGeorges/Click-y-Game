import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    selected: [],
    friends_array: [],
    friends,

    nav_msg: "Click an image to begin!",
    score: 0,
    top_score: 0
  };

  populateFriendsArray = () => {
    if (this.state.friends_array.length === 0) {
      this.state.friends.map(friend => (
        this.state.friends_array.push(friend)
      ));
    }
  }

  generateGame = () => {
    let friends_array = [];

    this.state.friends.map(friend => (
      friends_array.push(friend)
    ));

    // code stolen from here: https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react
    for(let i = (friends_array.length - 1); i > 0; i--) {
      const j = Math.floor(Math.random() * (friends_array.length));
      const temp = friends_array[i];
      friends_array[i] = friends_array[j];
      friends_array[j] = temp;
    }

    this.setState({friends_array})
  }

  selectChar = id => {
    let x = 0;
    let selected = this.state.selected;

    selected.map(selected => {
      if (selected === id) {
        x++;
      }
    });

    this.generateGame();
    console.log(this.state.friends_array);

    if (x > 0){
      this.restart();
    }
    else {
      const score = this.state.score + 1;
      this.setState({score});

      selected.push(id);

      // Set this.state.friends equal to the new friends array
      this.setState(selected);  
    }
  };

  restart = () => {
    let top_score = this.state.top_score;

    if (this.state.score > this.state.top_score) {
      top_score = this.state.score;
    }

    this.setState({
      selected: [],
      nav_msg: "Oh shucks, you've selected that one already",
      score: 0,
      top_score: top_score
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.populateFriendsArray();
    return (
      <div>
        <NavBar
          nav_msg= {this.state.nav_msg}
          score= {this.state.score}
          top_score= {this.state.top_score}
        />
        <Wrapper>
          <Title>Click-e-Game</Title>
          {this.state.friends_array.map(friend => (
            <FriendCard
              selectChar={this.selectChar}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
