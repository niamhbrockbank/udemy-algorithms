import { maxSubArraySum } from "./maxSubArraySum";

test("empty array returns null", () => {
    expect(maxSubArraySum([], 1)).toBe(null)
})

test("returns null if n > array length", () => {
    expect(maxSubArraySum([1,2], 4)).toBe(null)
})

test("handles array of all negative numbers", () => {
    expect(maxSubArraySum([-1,-2,-3,-4], 2)).toBe(-3)
})

test("handles positive numbers", () => {
    expect(maxSubArraySum([1,2,3,4,5], 2)).toBe(9)
    expect(maxSubArraySum([9,10,2,5,7], 3)).toBe(21)
    expect(maxSubArraySum([2,2,2,2,2,2], 3)).toBe(6)
})