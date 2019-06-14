import React from 'react';
import './PokeCard.css';

function PokeCard (props) {
  const {id, name, abilities, sprites} = props.item;
  return (
    <React.Fragment>
      <div className="pokemon__photo--container">
      <img src={sprites.front_default} alt={`Foto de ${name}`} className="pokemon__photo"/>
      </div>
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
