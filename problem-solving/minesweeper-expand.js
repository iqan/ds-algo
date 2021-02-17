/*

Given mines field, expand no-mines fields given a point to click

*/

const clickFieldItem = (field, num_rows, num_cols, i, j) => {
  let checker = [];

  if(field[i][j] === 0) {
    field[i][j] = -2;
    checker.push([i,j]);
  } else {
    return field;
  }

  while(checker.length > 0) {
    let [rowIndex,colIndex] = checker.pop();
    for(let i = rowIndex - 1; i <= rowIndex + 1; i++) {
      for(let j = colIndex - 1; j <= colIndex + 1; j++) {
        if(i >= 0 && j >= 0 && i < num_rows && j < num_cols && field[i][j] == 0) {
          field[i][j] = -2;
          checker.push([i,j]);
        }
      }
    }
  }

  return field;
}

const print = (arr, row, col) => {
  for(let i = 0; i < row; i++) {
    let line = '| ';
    for(let j = 0; j < col; j++) {
      line += arr[i][j] + ' |';
    }
    console.log(line);
  }
}

let field1 = [[0, 0, 0, 0, 0],
             [0, 1, 1, 1, 0],
             [0, 1, -1, 1, 0]];
print(field1, 3, 5);
print(clickFieldItem(field1, 3, 5, 0, 0), 3, 5);