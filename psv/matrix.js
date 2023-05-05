function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (arr[i][j] < -100 || arr[i][j] > 100) continue;
            if (i === j) {
                sum1 += arr[i][j];
            }
        }
        sum2 += arr[i][arr.length - i - 1];
    }
    return Math.abs(sum1 - sum2);
}

const matrix = [
    [54, 23, 67],
    [23, 54, 23],
    [67, 23, 54],
];

const diff = diagonalDifference(matrix);
console.log(diff);
