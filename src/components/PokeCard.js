import React from 'react';

function PokeCard (props) {
  const {id, name, abilities} = props.item;
  return (
    <React.Fragment>
      <small>{id}</small>
      <h2>{name}</h2>
      <ul className="poke__abilities">
        {abilities.map ((item, index) => (
          <li key={`poke-ab-${index}`}>{item.ability.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default PokeCard;
