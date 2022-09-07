import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(){
    super();
    alert("welcome to our page")
  } 
  state = {
    person: {
      fullName: "Belkaid Oussama",
      bio: `17 ans, student, live in Larbaa,
       have a little brand`,
      imgSrc: "/img.jfif",
      profession: "Front-end Develloper",
    },
    bool: true,
  };
  toggle = () => {
    this.setState(
      {bool :  this.state.bool ? false : true 
    })
  }
  render() {
    return (
      <div className="app">
        <div className="prof">
          <div className="imag">
            <img
              src={this.state.bool ? this.state.person.imgSrc : "/images.png"}
              alt=""
            />
          </div>
          <h1 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
            {this.state.bool ? this.state.person.fullName : "Anonymos"}
          </h1>
          <h3
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              color: "gray",
            }}
          >
            {this.state.bool ? this.state.person.profession : "Unknown job"}
          </h3>
          <span style={{textAlign:"center"}}>
            {this.state.bool ? this.state.person.bio : "No informations"}
          </span>
          <button onClick={this.toggle}>Toggle</button>
        </div>
      </div>
    );
  }
}

export default App;
