import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";

var renderNametag = name => <NameTag key={name} name={name} />;

class App extends Component {
  state = { friends: ["Beaker", "John", "Sarah"] };

  render() {
    var NameTagElements = this.state.friends.map(renderNametag);

    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
