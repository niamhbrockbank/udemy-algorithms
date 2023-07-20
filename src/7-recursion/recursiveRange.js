//Adds up all numbers from 0 to input
export default function recursiveRange(num){
    if (num === 0) return 0;
    return num + recursiveRange(num - 1)
}