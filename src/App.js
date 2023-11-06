import React from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Welcome from "./components/Welcome";

// import { product } from "./product";
// import { Name } from "./components/Name";
// import { Price } from "./components/Price";
// import { Description } from "./components/Description";
// import { Image } from "./components/Image";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem Ipsum",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Web Developer",
    },
    show: true,
    timeSinceMount: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <Card.Text>{this.state.person.profession}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >Toggle Profile</button>
        <p>Time since mount: {this.state.timeSinceMount}</p>
      </div>
    );
  }
  
}

export default App;