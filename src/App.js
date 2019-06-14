import React from 'react';
import PokeList from './components/PokeList';
import fetchData from './data/Data';
import Filter from './components/Filter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      filterValue: ''
    };
    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(event) {
    this.setState({
      filterValue: event.currentTarget.value
    });
  }

  render() {
    const { pokemons, filterValue } = this.state;

    if (this.state.pokemons.length === 0) {
      return <p>Cargando...</p>
    }

    return (
      <div className="App">
        <Filter handleFilter={this.handleFilter} />
        <PokeList pokemons={pokemons} filterValue={filterValue} />
      </div>
    );
  }
}

export default App;
