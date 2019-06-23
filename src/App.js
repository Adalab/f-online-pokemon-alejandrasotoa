import React, {useEffect, useState} from 'react';
import fetchData from './data/Data';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const App = () => {
  const [pokemons] = useState ([]);
  const [filterValue, setFilterValue] = useState ('');
  const [isLoading, setIsLoading] = useState (true);

  useEffect (() => {
    if (isLoading === true) {
      fetchData ().then (data => {
        data.results.map (item => {
          return fetch (item.url)
            .then (response => response.json ())
            .then (data => {
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleFilter={handleFilter}
                filterValue={filterValue}
                pokemons={pokemons}
              />
            )}
          />
          <Route
            path="/pokemon/:id"
            render={routerProps => (
              <PokeDetail
                match={routerProps.match.params}
                pokemons={pokemons}
              />
            )}
          />
        </Switch>
        <div className="cheeks" />
        <div className="cheeks" />
      </div>
    );
  }
};

export default App;
