import React from 'react';
import PokeCard from './PokeCard';
import './PokeList.css';

function PokeList (props) {
  const {pokemons, filterValue} = props;
  const newList = pokemons
  .filter (item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
  .map (item => {
    return (
      <li key={item.id} id={item.id} className="pokemon__item">
        <PokeCard item={item} />
      </li>
    );
  });

  return (
    <ul className="pokemon__list">
      {newList}
    </ul>
  );
}

export default PokeList;
