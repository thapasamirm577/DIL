//[4,2,6,8,2,4,5,7,2,1];
function BubbleSort(arr, size) {
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const a = [4, 2, 6, 8, 2, 4, 5, 7, 2, 1];
console.log(BubbleSort(a, a?.length));

module.exports = { BubbleSort };
