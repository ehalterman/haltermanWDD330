const url = 'https://pokeapi.co/api/v2/pokemon-species/132/';

fetch(url)
.then((response) => {
        return response.json();
})
.then( function (jsonObject) {
    console.table(jsonObject);
    const pokemon = jsonObject[''];

 })
.catch( error => console.log('There was an error!') )