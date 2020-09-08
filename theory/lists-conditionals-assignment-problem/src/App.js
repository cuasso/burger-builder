import React, { Component } from 'react';
import Validation from './Components/Validation'
import Char from './Components/Char'
import './App.css';

class App extends Component {

  state = {
    input: null
  }

  onChangeHandler = event => {
    let input = { ...this.state.input }
    input = event.target.value
    this.setState({ input: input })
  }

  render() {
    let size = null
    let charList = null
    if (this.state.input) {
      size = (
        <div>
          <p>{this.state.input.length}</p>
          <Validation size={this.state.input.length} />
        </div>
      )
      charList = this.state.input.splice('').map(char => {
        return <Char character={char} />
      })
    }



    return (
      <div className="App">
        <input type='text' onChange={event => this.onChangeHandler(event)} />
        {size}
        {charList}
      </div>
    );
  }
}

export default App;
