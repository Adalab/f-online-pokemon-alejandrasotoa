import React from 'react';
import PokeList from './PokeList';
import Filter from './Filter';
import './Home.css';

const Home = props => {
  const {handleFilter, pokemons, filterValue} = props;
  return (
    <div className="home__container">
      <Filter handleFilter={handleFilter} />
      <PokeList pokemons={pokemons} filterValue={filterValue} />
    </div>
  );
};

export default Home;
