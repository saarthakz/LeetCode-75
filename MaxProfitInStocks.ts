function maxProfit(prices: number[]): number {

  const bestSellingDayMap = new Map<number, number>();

  return maxProfitHelper(prices, 0, bestSellingDayMap);
};

function maxProfitHelper(prices: number[], current: number, bestSellingDayMap: Map<number, number>): number {
  if (prices.length - 1 - current <= 0) {
    return 0;
  };

  return Math.max(maxProfitHelper(prices, current + 1, bestSellingDayMap), findBestSellingDay(prices, current + 1, bestSellingDayMap) - prices[current]);
};

function findBestSellingDay(prices: number[], start: number, bestSellingDayMap: Map<number, number>): number {

  if (bestSellingDayMap.has(start + 1)) {
    return Math.max(prices[start], Number(bestSellingDayMap.get(start + 1)));
  };

  let max = -Infinity;
  for (let idx = start; idx < prices.length; idx++) {
    if (prices[idx] > max) max = prices[idx];
  };

  bestSellingDayMap.set(start, max);

  return max;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 4, 2]));
