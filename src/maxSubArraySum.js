/**
 * maxSubArraySum
 * Find the maximum total of n consecutive numbers
 * @param {number[]} inputArr array of numbers
 * @param {number} n number of consecutive array elements
 * @returns {number | null} maximum total of n consecutive numbers from inputArr
 */
export function naiveMaxSubArraySum(inputArr, n){
    if (n > inputArr.length){
        return null
    }

    let maxTotal;

    for (let start = 0; start + n <= inputArr.length; start++){
        let window = inputArr.slice(start, start + n)
        if (maxTotal){
            let windowTotal = window.reduce((a, b) => a + b)
            if (windowTotal > maxTotal){
                maxTotal = windowTotal
            }
        } else {
            maxTotal = window.reduce((a, b) => a + b)
        }
    }
    
    return maxTotal
}

export function maxSubArraySum(inputArr, n){
    if (n > inputArr.length){
        return null
    }

    let maxTotal = 0;
    let windowTotal =0;

    for (let i = 0; i < n; i++){
        maxTotal += inputArr[i]
    }

    windowTotal = maxTotal

    for (let start = n - 1; start + n < inputArr.length; start++){
        windowTotal = windowTotal - inputArr[start - 1] + inputArr[start + n]
        maxTotal = Math.max(windowTotal, maxTotal)
    }

    return maxTotal
}   
