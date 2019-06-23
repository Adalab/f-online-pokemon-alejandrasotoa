import React, {useEffect, useState} from 'react';
import PokeList from './components/PokeList';
import fetchData from './data/Data';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [pokemons] = useState ([]);
  const [filterValue, setFilterValue] = useState ('');
  const [isLoading, setIsLoading] = useState (true);

  useEffect (() => {
    if (isLoading === true) {
      fetchData ().then (data => {
        data.results.map (item => {
          fetch (item.url).then (response => response.json ()).then (data => {
            let newData = data;
            fetch (data.species.url)
              .then (response => response.json ())
              .then (dataEvolution => {
                pokemons.push ({
                  ...newData,
                  evolves_from: dataEvolution.evolves_from_species,
                });
                if (pokemons.length === 25) {
                  setIsLoading (false);
                }
              });
          });
        });
      });
    }
  });

  const handleFilter = event => {
    setFilterValue (event.currentTarget.value);
  };

  if (isLoading === true) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div className="App">
        <div className="ears" />
        <div className="ears" />
        <Filter handleFilter={handleFilter} />
        <PokeList pokemons={pokemons} filterValue={filterValue} />
        <div className="cheeks" />
        <div className="cheeks" />
      </div>
    );
  }
};

export default App;
