import React from 'react';
import PokeCard from './PokeCard';
import PropTypes from 'prop-types';
import './PokeList.css';

const PokeList = props => {
  const {pokemons, filterValue} = props;
  const newList = pokemons
    .filter (item =>
      item.name.toLowerCase ().includes (filterValue.toLowerCase ())
    )
    .map ((item, index) => {
      return (
        <li key={item.id} id={item.id} className="pokemon__item">
          <PokeCard item={item} index={index} />
        </li>
      );
    });
  return (
    <React.Fragment>
      {newList.length !== 0
        ? <ul className="pokemon__list">
            {newList}
          </ul>
        : <h2>No hay resultados para mostrar</h2>}
    </React.Fragment>
  );
};

PokeList.propTypes = {
  pokemons: PropTypes.array,
  filterValue: PropTypes.string,
};

export default PokeList;
