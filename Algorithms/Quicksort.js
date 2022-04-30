// Leetcode Problem 912

/* Algorithm:
1. The input takes in an array and a left + start and end of the array
2. A pivot is selected
3. All the elements less than the pivot are moved to the left and all elements greater are moved to the right
4.  the quicksort function is recursively called on each sublist
*/

function quicksort(arr, l = 0, r = arr.length - 1) {
  // should sort left and write and create sublists
  if (l < r) {
    let pivot = r;
    let j = l;
    let i = l;
    while (j <= pivot) {
      if (arr[j] < arr[pivot]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
        i++;
      } else {
        j++;
      }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    pivot = i;
    quicksort(arr, 0, pivot - 1); // for the first sublist
    quicksort(arr, pivot + 1, r); // for the second sublist
  }
  return arr;
}

// Tests
let arr1 = [2, 3, 6, 8, 5, 4, 7, 10, 6];
quicksort(arr1, 0, arr1.length - 1);

console.log(arr1);
