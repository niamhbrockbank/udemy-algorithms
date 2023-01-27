import recursiveRange from "./recursiveRange";

test("recursive range works with positive numbers", () => {
    expect(recursiveRange(6)).toBe(21)
    expect(recursiveRange(10)).toBe(55)
})