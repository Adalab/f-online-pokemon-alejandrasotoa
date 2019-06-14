import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
    this.fetchPokemons();
  }

  fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=25")
      .then(response => response.json())
      .then(data => data.results.map(item => {
        let newArray;
        fetch(item.url)
          .then(response => response.json())
          .then(data => { this.setState(prevState => ({ pokemons: [...prevState.pokemons, { ...data }] })) })
      }))
  }

  render() {
    return <div className="App"> Hola </div>;
  }
}

export default App;
