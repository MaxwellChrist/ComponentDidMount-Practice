import React, { Component } from "react";
import "./App.css";
import { people } from "./people";
// console.log(people);

class App extends Component {
  constructor() {
    console.log("constructor invoked");
    super();
    this.state = {
      // friends: people
      friends: []
    };
  }
  componentDidMount() {
    console.log("CDM invoked");
    this.setState({
      friends: people
    });
  }
  render() {
    console.log("render invoked");
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        {this.state.friends.map((friend) => (
          <div key={friend.id}>{friend.first_name}</div>
        ))}
      </div>
    );
  }
}

export default App;
