const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='
const apiKey = 'PLEASE PUT YOUR KEY HERE!!!!' //coloque aqui sua key

if(apiKey === 'PLEASE PUT YOUR KEY HERE!!!!') {
    alert('Erro de configuração, é necesário colocar sua Key no arquivo index.js linha 2')
}

fetch(url + apiKey).then( (response) => {
    if( !response.ok ) {
        throw new Error(response.status)
    }
    return response.json()
})
.then((api) => {
    var texto = ""

    for(let i = 0; i < 10; i++) {
        texto = texto + `<div class="media">
                <img src="./img/icon.png" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-middle">
                    <h5>${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                </div>
                <p class="first-data">${api.data[i].first_historical_data}</p>
            </div>`

        }
        document.getElementsByClassName("coins")[0].innerHTML = texto;

})
.catch( (error) => {
    console.error(error.message)
})
