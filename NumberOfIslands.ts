function numIslands(grid: string[][]): number {

  function breadFirstSearch(grid: string[][], row: number, col: number): void {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == "0") return;

    grid[row][col] = "0";
    breadFirstSearch(grid, row - 1, col);
    breadFirstSearch(grid, row + 1, col);
    breadFirstSearch(grid, row, col - 1);
    breadFirstSearch(grid, row, col + 1);

    return;
  }

  let ctr = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        ctr += 1;
        breadFirstSearch(grid, row, col);
      }
    };
  };

  return ctr;

};