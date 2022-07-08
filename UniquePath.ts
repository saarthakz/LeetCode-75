function uniquePathsHelper(row: number, col: number, pathMap: Map<string, number>): number {
  if (row == 0 || col == 0) return 0;
  if (row == 1 || col == 1) return 1;

  if (pathMap.has(`${row}-${col}`)) return Number(pathMap.get(`${row}-${col}`));

  pathMap.set(`${row}-${col}`, uniquePathsHelper(row - 1, col, pathMap) + uniquePathsHelper(row, col - 1, pathMap));

  return Number(pathMap.get(`${row}-${col}`));
};

function uniquePaths(row: number, col: number) {
  return uniquePathsHelper(row, col, new Map<string, number>());
};

console.log(uniquePaths(3, 7));