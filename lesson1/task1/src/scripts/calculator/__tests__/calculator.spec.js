import { sum, mult } from "../calculator";

it("should return sum", () => {
  expect(sum(2, 3)).toEqual(5);
});
it("should return multiply", () => {
  expect(mult(2, 3)).toEqual(6);
});
