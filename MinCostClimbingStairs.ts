function minCostClimbingStairsHelper(cost: number[], start: number, minCostMap: Map<number, number>): number {
  if (start == cost.length - 1) cost[cost.length - 1];
  if (start > cost.length - 1) return 0;

  if (minCostMap.has(start)) return Number(minCostMap.get(start));

  minCostMap.set(start, Math.min(cost[start] + minCostClimbingStairsHelper(cost, start + 1, minCostMap), cost[start] + minCostClimbingStairsHelper(cost, start + 2, minCostMap)));

  return Number(minCostMap.get(start));
};

function minCostClimbingStairs(costs: number[]): number {
  return Math.min(minCostClimbingStairsHelper(costs, 0, new Map<number, number>()), minCostClimbingStairsHelper(costs, 1, new Map<number, number>()));
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
