//NAIVE SOLUTION
export function sameNaive(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }

    const squareArr1 = arr1.map((num) => num**2)
    let copyArr2 = [...arr2]

    for(const num of squareArr1){
        if (!copyArr2.includes(num)){
            return false
        } else {
            const index = copyArr2.indexOf(num)
            copyArr2.splice(index, 1)
        }
    }

    return true
}

//O(n) SOLUTION
export function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }

    const freqCount1 = convertToFreqObj(arr1)
    const freqCount2 = convertToFreqObj(arr2)

    for (let key in freqCount1){
        if (!freqCount2[key**2]){
            return false
        } else {
            if (freqCount1[key] !== freqCount2[key**2]){
                return false
            }
        }
    }

    return true

}

function convertToFreqObj(arr){
    const freqCount = {}

    for (let num of arr){
        if(freqCount[num] > 0){
            freqCount[num]++
        } else {
            freqCount[num] = 1
        }
    }

    return freqCount
}