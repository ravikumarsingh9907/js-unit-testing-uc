import { it, expect } from "vitest";
import { add } from "./math";

// Checking wether add function is returning true value or not
it("should be return the sum of array elements", () => {
  // Arrange
  const numbers = [1, 2, 3];

  const expectedValue = numbers.reduce(
    (prevNumber, nextNumber) => prevNumber + nextNumber,
    0
  );

  // Act
  const result = add(numbers); // } AAA Pattern - Arrange, Act, Assert

  // Assert
  expect(result).toBe(expectedValue);
});

// If Invalid Value passed to the array, it should return NaN
it("should return NaN if atleast one value procied invalid", () => {
  const numbers = ["invalid", 1];

  const result = add(numbers);

  expect(result).toBeNaN();
});

// If string Integer value passed to the array it should return true value
it("should return correct value if String number passed", () => {
  // Arrange
  let numbers = ["1", "2", "3"];

  const expectedValue = numbers.reduce(
    (prevNumber, nextNumber) => +prevNumber + +nextNumber,
    0
  );

  const result = add(numbers);

  expect(result).toBe(expectedValue);
});

// it should return 0 if empty value is provied
it("should return 0 if empty array is provied", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

// should throw err if we do not pass any argument
it("should return error if no argument provided", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
