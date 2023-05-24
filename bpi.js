let coin = {
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    getData: function(){
        fetch(this.url)
        .then((res)=>res.json())
        .then((data)=>this.displayData(data));
    },
    displayData: function(data){
        // const dollars = {symbol:symbol, rate:rate} = data["bpi"]["USD"];
        // const pounds = {symbol:symbol, rate:rate} = data.bpi.GBP;
        // const euros = {symbol:symbol, rate:rate} = data.bpi.EUR;

        // document.getElementById("usd").innerHTML = dollars.symbol+dollars.rate;
        // document.getElementById("gbp").innerHTML = pounds.symbol+pounds.rate;
        // document.getElementById("eur").innerHTML = euros.symbol+euros.rate;
        
        document.getElementById("usd").innerHTML = data.bpi.USD.symbol+data.bpi.USD.rate;
        document.getElementById("gbp").innerHTML = data.bpi.GBP.symbol+data.bpi.GBP.rate;
        document.getElementById("eur").innerHTML = data.bpi.EUR.symbol+data.bpi.EUR.rate;
    }
}

const reload = () => coin.getData();

setInterval(reload, 3000);

