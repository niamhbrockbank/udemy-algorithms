/**
 * Returns the index of target within an array
 * @param {T[]} arr sorted array
 * @param {T} target 
 * @returns {number} index of target within array if found, else -1
 */
function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((left + right) / 2)

    while (arr[middle] !== target){
        if (left > right){
            return -1
        }

        if (arr[middle] > target){
            right = middle - 1
        } else {
            left = middle + 1
        }

        middle = Math.floor((left + right) / 2)
    }

    return middle
}