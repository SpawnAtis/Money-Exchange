// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let coinsObj ={
        50 : "H",
        25 : "Q",
        10 : "D",
        5  : "N",
        1  : "P"
    };
    let coinsArray = [50, 25, 10, 5, 1]
    let exchange= {};
    let countOfCoins;

    coinsArray.reduce((currentCurrency, currentCoin) => {
        countOfCoins =  ~~(currentCurrency / currentCoin);
        if (countOfCoins > 0) {
            currentCurrency -= (currentCoin * countOfCoins);
            exchange[coinsObj[currentCoin]] = countOfCoins;
        }
        return currentCurrency;
    }, currency);

    return exchange;
};
