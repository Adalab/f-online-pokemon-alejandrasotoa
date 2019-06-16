import React from 'react';
import PropTypes from 'prop-types';
import './PokeCard.css';

function PokeCard (props) {
  const {name, types, sprites} = props.item;
  const {index} = props;
  return (
    <React.Fragment>
      <div className="pokemon__photo--container">
        <div
          style={{backgroundImage: `url(${sprites.front_default})`}}
          className="pokemon__photo"
        />
        <small className="pokemon__id">ID / {index + 1}</small>
      </div>
      <div className="pokemon__info--container">
        <h2 className="pokemon__name">{name}</h2>
        <ul className="poke__type">
          {types.map ((item, index) => (
            <li key={`poke-ab-${index}`} className="poke__type--item">
              {item.type.name}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

PokeCard.propTypes = {
  name: PropTypes.string,
  types: PropTypes.array,
  sprites: PropTypes.array,
  index: PropTypes.number,
};

export default PokeCard;
