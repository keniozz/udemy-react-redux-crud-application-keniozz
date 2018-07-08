import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I am clicked")}} />
        <input type="text" onChange={() => {console.log("I am changed")}} />
      </React.Fragment>
    );
  }
}



export default App;
