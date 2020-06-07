const url = '#';

fetch(url)
.then((response) => {
        return response.json();
})
.then( function (jsonObject) {
    console.table(jsonObject);
    const pokemon = jsonObject[''];

 })
.catch( error => console.log('There was an error!') )