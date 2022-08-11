/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let initialProfit = 0;
    let maxProfit = 0;
    let buy = prices[0];
    if(prices.length<2)
        return 0;
    for(let i = 0 ; i<prices.length; i++){
        initialProfit = prices[i] - buy;
        if(initialProfit> maxProfit){
            maxProfit = initialProfit;
        }
        if(initialProfit<0){
            buy = prices[i];
        }
    }
    return maxProfit;
};
