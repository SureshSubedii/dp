var maxProfit = function(prices) {
    let minPrice = Infinity
    let maxProfit = 0
    for(let i = 0; i < prices.length; i ++){
        minPrice = Math.min(minPrice, prices[i])
        let profit = prices[i] - minPrice
        if(profit > maxProfit){
            maxProfit = profit
        }
    }
    return maxProfit
    
};