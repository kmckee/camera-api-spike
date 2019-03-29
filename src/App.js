import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { imageDataUrl: null };
  }
  onSelectImage = e => {
    var reader = new FileReader();
    reader.onload = e => {
      this.setState({ imageDataUrl: e.target.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    console.log(this.state.imageDataUrl);
    return (
      <div className="App">
        <form id="form1" runat="server">
          <input type="file" onChange={this.onSelectImage} />
          <img src={this.state.imageDataUrl} alt="todo" />
        </form>
      </div>
    );
  }
}

export default App;
