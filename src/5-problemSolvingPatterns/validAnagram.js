export function validAnagram(str1, str2){
    const freqCount1 = createFreqObj(str1)
    const freqCount2 = createFreqObj(str2)

    for (let key in freqCount1){
        if (freqCount1[key] !== freqCount2[key]){
            return false
        }
    }
    return true
}

function createFreqObj(str){
    const freqCount = {}

    for (let char of str){
        freqCount[char] > 0 ? freqCount[char]++ : freqCount[char] = 1
    }

    return freqCount
}