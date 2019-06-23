import React from 'react';
import {Link} from 'react-router-dom';
import './PokeDetail.css';

const PokeDetail = props => {
  const {pokemons, match} = props;
  const pokemonSelected = pokemons.find (
    item => item.id === parseInt (match.id)
  );
  return (
    <div className="detail__container">
      <h1 className="detail__name">{pokemonSelected.name.toUpperCase ()}</h1>
      <div className="detail__image--container">
        <img
          className="detail__image"
          src={pokemonSelected.sprites.front_default}
          alt={`Vista de frente de ${pokemonSelected.name}`}
        />
        <img
          className="detail__image"
          src={pokemonSelected.sprites.back_default}
          alt={`Vista de espalda de ${pokemonSelected.name}`}
        />
      </div>
      <div className="detail__main--container">
        <div className="detail__container--spec">
          <h2 className="detail__height">
            Altura (dm){' '}
          </h2>
          <span className="detail__spec">{pokemonSelected.height} </span>
        </div>
        <div className="detail__container--spec">
          <h2 className="detail__weight">
            Peso (hm){' '}
          </h2>
          <span className="detail__spec">{pokemonSelected.weight} </span>
        </div>
        <div className="detail__container--spec">
          <ul className="detail__abilities--list">
            <h2 className="detail__abilities--title">Habilidades</h2>
            {pokemonSelected.abilities.map ((item, index) => {
              return (
                <li key={`ab-${index}`} className="detail__abilities--item">
                  {item.ability.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Link to="/">Regresar</Link>
    </div>
  );
};

export default PokeDetail;
