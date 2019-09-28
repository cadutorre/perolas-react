import React from "react";

export default class Perola extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perolas: ["Teste", "Outro Teste"]
    };
  }
  render() {
    return <ul></ul>;
  }
}
