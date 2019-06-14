import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import fetchData from './data/Data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  fetchPokemons() {
    fetchData()
      .then(data => {
        data.results.map(item =>
          fetch(item.url)
            .then(response => response.json())
            .then(data => this.setState(prevState => ({ pokemons: [...prevState.pokemons, { ...data }] }))
            )
        )
      })
  }

  componentDidMount() {
    const isLocalStorage = JSON.parse(localStorage.getItem('pokemonList'));
    if (isLocalStorage === null) {
      this.fetchPokemons();
    } else {
      this.setState({ pokemons: [...isLocalStorage] })
    }
  }

  componentDidUpdate() {
    if (this.state.pokemons.length === 25) {
      localStorage.setItem('pokemonList', JSON.stringify(this.state.pokemons));
    }
  }

  render() {
    const { pokemons } = this.state;

    if (this.state.pokemons.length === 0) {
      return <p>Cargando...</p>
    }

    return (
      <div className="App">
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
