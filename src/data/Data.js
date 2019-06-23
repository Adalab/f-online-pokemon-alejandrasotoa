const fetchData = dataUrl => fetch(dataUrl).then(response => response.json());

export default fetchData;

      