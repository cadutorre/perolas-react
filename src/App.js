import React from "react";
import "./App.css";

import Perola from "./components/perolas/perolas";
import NovaPerola from "./components/nova-perola/nova-perola";

class App extends React.Component {
  render() {
    return (
      <div>
        <Perola />
        <NovaPerola />
      </div>
    );
  }
}

export default App;
