//7,1,5,3,6,4=>5
//7,6,4,3,1=>0
function maxProfit(prices){
    //greedy
    let minStockPrice=prices[0]||0
    let profit=0
    for(let i=0;i<prices.length;i++){
        minStockPrice=Math.min(minStockPrice,prices[i])
        profit=Math.max(profit,prices[i]-minStockPrice)
    }
    return profit;
}
console.log(maxProfit([7,1,5,3,6,4]))