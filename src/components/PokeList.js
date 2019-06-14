import React from 'react';
import PokeCard from './PokeCard';

function PokeList (props) {
  const {pokemons, filterValue} = props;
  const newList = pokemons
  .filter (item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
  .map (item => {
    return (
      <li key={item.id} id={item.id}>
        <PokeCard item={item} />
      </li>
    );
  });

  return (
    <ul>
      {newList}
    </ul>
  );
}

export default PokeList;
