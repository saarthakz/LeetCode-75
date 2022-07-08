function floodFill(image: number[][], startRow: number, startCol: number, color: number): number[][] {

  let rows = image.length;
  let columns = image[0].length;

  function inRange(row: number, col: number) {
    return (row > -1 && row < rows && col > -1 && col < columns);
  };

  function performFlood(image: number[][], row: number, col: number, color: number, visited: Set<string>) {

    if (!inRange(row, col)) return;
    if (visited.has(`${row}-${col}`)) return;

    visited.add(`${row}-${col}`);

    const possibleFloodWays = new Array();
    if (inRange(row - 1, col) && image[row - 1][col] == image[row][col]) possibleFloodWays.push([row - 1, col]);
    if (inRange(row + 1, col) && image[row + 1][col] == image[row][col]) possibleFloodWays.push([row + 1, col]);
    if (inRange(row, col - 1) && image[row][col - 1] == image[row][col]) possibleFloodWays.push([row, col - 1]);
    if (inRange(row, col + 1) && image[row][col + 1] == image[row][col]) possibleFloodWays.push([row, col + 1]);

    possibleFloodWays.forEach((way) => performFlood(image, way[0], way[1], color, visited));

    image[row][col] = color;
  };

  const visited = new Set<string>();

  performFlood(image, startRow, startCol, color, visited);

  return image;
};

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
console.log(floodFill(image, 1, 1, 2));