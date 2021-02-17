/*

Given price of item and money given, calculate change to return with minimum coins

*/

let change = [1, 5, 10, 25, 50, 100];

const getChange = (moneyIns, price) => {
  var mToReturn = moneyIns * 100 - price * 100;
  var op = new Array(6).fill(0);

  for (let i = 1; i <= 6; i++) {
    if (mToReturn == change[6 - i]) {
      op[6 - i] += 1;
      break;
    } else if (mToReturn < change[6-i]) {
      continue;
    } else {
      while (mToReturn > change[6-i]) {
        op[6 - i] += 1;
        mToReturn = mToReturn - change[6-i];
      }
    }
  }

  return op;
}

var act = getChange(5, 0.99);
console.log(act);