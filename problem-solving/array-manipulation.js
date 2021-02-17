/*

Given queries, apply on array and find max value
[i,j,k] = i = start index, j = end index, k = value

*/

function arrayManipulation(queries) {
    let arr = [];
    for(let i = 0; i < queries.length; i++) {
      let a = queries[i][0];
      let b = queries[i][1];
      let k = queries[i][2];
      arr[a - 1] = (arr[a - 1] || 0) + k;
      arr[b] = (arr[b] || 0) - k;
    }
    //console.log('man', arr)
    let sum = 0;
    let max = 0;
    for(let i = 1; i < arr.length; i++) {
      //arr[i] = (arr[i] + arr[i - 1]) || 0;
      sum = sum + (arr[i] || 0);
      max = Math.max(max, sum);
    }
    //console.log('sum', arr)
    return max;//Math.max(...arr);
}

//arrayManipulation([[1, 2, 100], [2, 5, 100], [3, 4, 100]]);
arrayManipulation([[2, 3, 603],[1, 1, 286],[4, 4, 882]]);
//arrayManipulation([[1400906, 9889280, 90378],[6581237, 9872072, 87106],[4386373, 9779851, 52422]]);