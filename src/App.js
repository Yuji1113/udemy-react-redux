import React, { Component } from 'react'

class App extends Component {
  render() {
    return(
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" id="bar" onChange={ () => {console.log("I am Click!")} }  />
      </div>
    )
  }
}

export default App;