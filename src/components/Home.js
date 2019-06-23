import React from 'react';
import PokeList from './PokeList';
import Filter from './Filter';
import './Home.css';


const Home = props => {
    const { handleFilter, pokemons, filterValue } = props;
    return (
        <React.Fragment>
            <div className="ears" />
            <div className="ears" />
            <Filter handleFilter={handleFilter} />
            <PokeList pokemons={pokemons} filterValue={filterValue} />
            <div className="cheeks" />
            <div className="cheeks" />
        </React.Fragment>
    );
};

export default Home;
