import { same } from "./same.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("if squares are in different order return true", () => {
    expect(same([1,2,3], [4,1,9])).toBe(true);
});

test("squares of a different frequency return false", () => {
    expect(same([1,2,1], [4,4,1])).toBe(false);
});
