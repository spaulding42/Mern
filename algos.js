const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let biggest = arr[0]
        let end = arr.length-i
        let biggest_index = 0
        for (var j = 0; j <  arr.length - i; j++){
            if(arr[j] > biggest){
                biggest = arr[j]
                biggest_index = j
            }
            end = j
        }
        var temp = arr[end]
        arr[end] = arr[biggest_index]
        arr[biggest_index] = temp              
    }
        return(arr);
}
                  
            
    
     
console.log(bubbleSort(numsOrdered));
console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));
console.log(bubbleSort(expected));