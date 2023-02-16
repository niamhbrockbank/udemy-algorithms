/**
 * Find the first pair of numbers in a sorted array that sum to zero.
 * @param {number[]} arr
 * @returns {[number, number]} 
 */
function sumZero(arr){
    let left = 0
    let right = arr.length - 1

    while (left < right){
        let sum = arr[left] + arr[right]
        console.log(sum)
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
        } else {
            left++
        }
    }
}

console.log(sumZero([-3,-2,-1,0,2, 3, 4, 6])) //[-3, 3]

/*
Note that nested loops are O(n^2)
*/
function naiveSumZero(inputArr){
    for (let i = 0; i < inputArr.length - 1; i++){
        for (let j = 0; j < inputArr.length; j++){
            if (inputArr[i] + inputArr[j] === 0){
                return [inputArr[i], inputArr[j]]
            }
        }
    }

    return undefined
}