/**
 * Count the number of different numbers that are in an array
 * @param {number[]} inputArr
 * @returns {number} count of unique values
 */
function countUniqueValues(inputArr){
    let pointerA = 0
    let pointerB = 1
    let count = 0

    while (pointerA <= inputArr.length && pointerB <= inputArr.length){
        if (inputArr[pointerA] !== inputArr[pointerB]){
            count++
            pointerA < pointerB ? pointerA = pointerB + 1 : pointerB = pointerA + 1
        } else {
            pointerA < pointerB ? pointerB++ : pointerA++
        }
    }

    return count
}

console.log(countUniqueValues([1,1,1,1,1,1,2]), 2)
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), 7)
console.log(countUniqueValues([]), 0)
console.log(countUniqueValues([-2,-1,-1,0,1]), 4)