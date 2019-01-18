function insertionSort(arr) {
  for(var i=1; i < arr.length; i++) {
    var key = arr[i]
    var j = i - 1

    while(j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j]
      j = j - 1
      arr[j+1] = key
    }
  }

  return arr
}

var arr = [10, 3, 12, 7, 2, 11, 9]
var arr1 = [9, 8, 8, 1, 1, 2, 3, 6]

console.log(insertionSort(arr))
// returns [ 2, 3, 7, 9, 10, 11, 12 ]

console.log(insertionSort(arr1))
// returns [ 1, 1, 2, 3, 6, 8, 8, 9 ]

