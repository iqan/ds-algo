/*

create a minesweeper field given number of rows, columns and mine location
mines = -1

*/

const mine_sweeper = (bombs, num_rows, num_cols) => {
  let field = [];
  for(let rowIndex = 0; rowIndex < num_rows; rowIndex++) {
    field[rowIndex] = [];
    for(let colIndex = 0; colIndex < num_cols; colIndex++) {
      field[rowIndex][colIndex] = 0;
    }
  }
  for(let bombIndex = 0; bombIndex < bombs.length; bombIndex++) {
    let rowIndex = bombs[bombIndex][0];
    let colIndex = bombs[bombIndex][1];
    field[rowIndex][colIndex] = -1;
    for(let i = rowIndex - 1; i <= rowIndex + 1; i++) {
      for(let j = colIndex - 1; j <= colIndex + 1; j++) {
        if(i >= 0 && j >= 0 && i < num_rows && j < num_cols && field[i][j] !== -1) {
          field[i][j]++;
        }
      }
    }
  }
  return field;
}

let output = mine_sweeper([[0,0],[0,1]], 3, 4);
console.log(output)