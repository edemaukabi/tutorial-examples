import React from "react";

class Welcome extends React.Component {
    state = {
      name: "Sara"
    };

    handleClick=()=>this.setState({name:'Arya'})
    
    render() {
      return(
        <>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handleClick}> ClickMe</button>
        </>
      )
    }
   }

export default Welcome;
