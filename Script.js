// Substitua 'SUA_CHAVE_DE_API' pela sua chave de API do ExchangeRate-API
const apiKey = '52e4b86be6ccc7c64f0400ad';

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`);
    const data = await response.json();

    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}