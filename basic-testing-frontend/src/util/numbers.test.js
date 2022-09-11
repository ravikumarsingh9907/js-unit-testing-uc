import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should return integer value if we provide string integer", () => {
  const number = "2";
  const result = transformToNumber(number);

  const converIntoNumber = +number;
  expect(result).toBe(converIntoNumber);
});

// function will return NaN if string is provided
it("should return NaN if invalid input is provided", () => {
  const number = "Ravi";
  const result = transformToNumber();
  expect(result).toBeNaN();
});
