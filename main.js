const serverUrl = "https://yncssdaw4tzw.usemoralis.com:2053/server";
const appId = "cQSS9I7jmBWGuhUtwQOeJEfvQFBO7Rnllbn8l5uv";
Moralis.start({ serverUrl, appId });

getHistoricaldata = async () => {
    var str = document.getElementById("wallet-address").value
     fetch(`https://api.covalenthq.com/v1/1/address/0xd8da6bf26964af9d7eed9e03e53415d37aa96045/portfolio_v2/?quote-currency=USD&format=JSON&key=ckey_7226c22e0c6a4aaba3c408e8891`)
    .then(response => response.json())
    .then(data => console.log(data)); 
}

var Web3 = require("web3")
var accounts = ethereum.enable();
var web3 = new Web3(ethereum);
var ens = web3.eth.ens;

getResolve = async () => {
            var address = ens.getAddress('alice.eth');
            console.log(address);
}
getResolve();