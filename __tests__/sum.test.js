import { sum } from "../src/components/Sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(8,7);
    expect(result).toBe(15);
})