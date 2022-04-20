getNftcollection = async () => {
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}