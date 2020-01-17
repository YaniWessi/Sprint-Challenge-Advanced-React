import React from "react";
import axios from "axios";
import NavBar from "./component/NavBar";
import "./App.css";

class App extends React.Component {
  state = {
    player: [{}]
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          player: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.player.map(player => (
          <div key={player.id} className="playercard">
            <h3>{player.name}</h3>
            <h4>{player.country}</h4>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
