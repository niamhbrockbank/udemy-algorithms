function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++){
        const value = arr[i]

        if (value === target){
            return i
        }
    }

    return -1
}