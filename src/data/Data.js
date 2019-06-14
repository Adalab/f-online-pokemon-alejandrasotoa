const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=25';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData;

      