import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = props => {
  const {handleFilter} = props;
  return (
    <div className="filter__container">
      <label htmlFor="filter" className="filter__label">
        Filtrar por nombre
      </label>
      <input
        name="filter"
        className="filter__input"
        onChange={handleFilter}
        placeholder="Filtrar pokemons por nombre..."
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
};

export default Filter;
