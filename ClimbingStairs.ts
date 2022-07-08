function climbStairsHelper(num: number, numMap: Map<number, number>): number {
  if (num == 0) return 1;
  if (num < 0) return 0;

  if (numMap[num] != undefined) return numMap[num];

  numMap[num] = climbStairsHelper(num - 1, numMap) + climbStairsHelper(num - 2, numMap);
  return numMap[num];
};

function climbStairs(num: number): number {
  return climbStairsHelper(num, new Map<number, number>());
};

console.log(climbStairs(2));
console.log(climbStairs(3));