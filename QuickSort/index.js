// [10,4,2,8,22,43,65,12,0,-4,-7,0,100,45]
var unSortedArray = [10,4,2,8,22,43,65,12,0,-4,-7,0,100,45]
var unSortedArray2 = [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3]


function quickSort(arr) {
  if(arr.length <= 1) return arr

  var pivot = arr[arr.length-1]
  var left = []
  var right = []

  for(var i=0;i < arr.length-1; i++) {
    if(arr[i] < pivot) { left.push(arr[i])}
    else { right.push(arr[i])}
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(unSortedArray))
console.log(quickSort(unSortedArray2))
