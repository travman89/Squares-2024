/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, describe, it } from "vitest";
import { randomizeArray } from "../helpers";

describe("dummy", () => {
  it("should return an empty array when given an empty array", () => {
    const input: any[] = [];
    const output = randomizeArray(input);
    expect(output).toEqual([]);
  });

  it("should return the same array when given an array with a single element", () => {
    const input = [1];
    const output = randomizeArray(input);
    expect(output).toEqual([1]);
  });

  // Test for an array with multiple elements
  it("should return an array with the same elements as the input array, in a different order", () => {
    const input = [1, 2, 3, 4, 5];
    const output = randomizeArray(input);
    // Ensure that the length of the output array is the same as the input array
    expect(output.length).toEqual(input.length);
    // Ensure that the output array contains all elements of the input array
    input.forEach((element) => {
      expect(output).toContain(element);
    });
    // Ensure that the output array is not the same as the input array (order is different)
    expect(output).not.toEqual(input);
  });

  // Test for array containing different types of elements
  it("should return an array with the same elements as the input array, in a different order, when the input array contains elements of different types", () => {
    const input = [1, "two", { three: 3 }, [4, 5], true];
    const output = randomizeArray(input);
    // Ensure that the length of the output array is the same as the input array
    expect(output.length).toEqual(input.length);
    // Ensure that the output array contains all elements of the input array
    input.forEach((element) => {
      expect(output).toContain(element);
    });
    // Ensure that the output array is not the same as the input array (order is different)
    expect(output).not.toEqual(input);
  });
});
