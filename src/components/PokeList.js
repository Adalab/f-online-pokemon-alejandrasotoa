import React from 'react';
import PokeCard from './PokeCard';

function PokeList (props) {
  const newList = props.pokemons.map (item => {
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
