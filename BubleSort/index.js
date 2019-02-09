var arr1 = [9, 8, 8, 1, 1, 2, 3, 6]

function bubbleSort(arr) {
  do {
    var swapped = false
    for(let i=0;i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while(swapped);

  return arr
}

console.log(bubbleSort(arr1))