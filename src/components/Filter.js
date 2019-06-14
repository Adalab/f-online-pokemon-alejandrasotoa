import React from 'react';
import './Filter.css';

function Filter (props) {
    const {handleFilter} = props;
  return (
    <div className="filter__container">
      <label htmlFor="filter" className="filter__label">
        Filtrar por nombre
      </label>
      <input name="filter" className="filter__input" onChange={handleFilter} placeholder="Filtrar pokemons por nombre..." />
    </div>
  );
}

export default Filter;