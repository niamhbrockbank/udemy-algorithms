import productOfArray from "./productOfArray";

test("product of array with positive numbers", () => {
    expect(productOfArray([1,2,3])).toBe(6)
    expect(productOfArray([1,2,3,10])).toBe(60)
})