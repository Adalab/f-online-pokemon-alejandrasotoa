import React from 'react';

function Filter (props) {
    const {handleFilter} = props;
  return (
    <div className="filter__container">
      <label htmlFor="filter" className="filter__label">
        Filtrar por nombre
      </label>
      <input name="filter" className="filter__input" onChange={handleFilter} />
    </div>
  );
}

export default Filter;