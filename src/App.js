import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=25")
      .then(response => response.json())
      .then(data => {
        data.results.map(item =>
          fetch(item.url)
            .then(response => response.json())
            .then(data => this.setState(prevState => ({ pokemons: [...prevState.pokemons, { ...data }] }))
            )
        )
      }
      )
  }

  componentDidMount() {
    const isLocalStorage = JSON.parse(localStorage.getItem('pokemonList'));
    if (isLocalStorage.length === 0) {
      this.fetchPokemons();
    } else {
      this.setState({ pokemons: [ ...isLocalStorage ] })
    }
  }

  componentDidUpdate() {
    if (this.state.pokemons.length === 25) {
      localStorage.setItem('pokemonList', JSON.stringify(this.state.pokemons));
    }
  }

  render() {
    if (this.state.pokemons.length === 0) {
      return <p>Cargando...</p>
    }
    return <div className="App">
      {/* {this.state.pokemons.map(item => <li>{item.name}</li>)} */}
    </div>;
  }
}

export default App;
