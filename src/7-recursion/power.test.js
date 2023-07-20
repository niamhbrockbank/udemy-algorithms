import power from "./power";

test("power works with positive numbers as exponents", () => {
    expect(power(2,0)).toBe(1)
    expect(power(2,2)).toBe(4)
    expect(power(2,4)).toBe(16)
})