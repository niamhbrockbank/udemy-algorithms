/**
 * Find the number of instances of a short string within a longer string.
 * @param {string} longStr string to search
 * @param {string} target target string to search for
 * @returns {number} number of instances of target within longStr
 */
function naiveStringSearch(longStr, target){
    const targetLength = target.length
    const count = 0

    for (let i = 0; i < longStr.length; i++){
        const longLetter = longStr[i]

        if (longLetter === target[0]){
            if (longStr.slice(i, i + targetLength) === target){
                count ++
            }
        }
    }

    return count
}