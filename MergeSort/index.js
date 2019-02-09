// [10,5,3,2,9,45,86,40,32,23,3,3,3,7,0,-1]
var arr = [10,5,3,2,9,45,86,40,32,23,3,3,3,7,0,-1]

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  
  var length = arr.length
  var middle = Math.floor(length/2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle, length)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var res = []
  
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  
  while(left.length) {
    res.push(left.shift())
  }
  while(right.length) {
    res.push(right.shift())
  }
  
  return res
  
}

console.log(mergeSort(arr))

