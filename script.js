console.log('hi');

async function getPrice() {
    const coin = document.getElementById("coin-select").value;
    const currency = document.getElementById("currency-selector").value;
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency};`

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("API ERROR");

        const data = await response.json();
        const price = data[coin][currency];
        
       const symbols = {
                inr: "₹",
                usd: "$",
                eur: "€",
                gbp: "£",
                jpy: "¥"
            };
        const symbol = symbols[currency] || "";
        
    document.getElementById("price").textContent =
        `${coin.toUpperCase()} Price: ${symbol}${price.toLocaleString()}`;
    } catch (err) {
      document.getElementById("price").textContent = 'Failed to fetch price.';
      console.error(err);
    }
}


setInterval(getPrice, 30000);

getPrice();