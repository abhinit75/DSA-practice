const quicksort = require("../Quicksort");

describe("", () => {
  it("Testing with random array", () => {
    let arr = [2, 3, 6, 8, 5, 4, 7, 10, 6];
    let sortedArr = quicksort(arr, 0, arr.length - 1);
    expect(sortedArr).toEqual([2, 3, 4, 5, 6, 6, 7, 8, 10]);
  });

  it("Testing with descending array", () => {
    let arr = [10, 9, 7, 6, 4, 2, 1, 0];
    let sortedArr = quicksort(arr, 0, arr.length - 1);
    expect(sortedArr).toEqual([0, 1, 2, 4, 6, 7, 9, 10]);
  });

  it("Testing with ascending array", () => {
    let arr = [0, 1, 2, 4, 6, 7, 9, 10];
    let sortedArr = quicksort(arr, 0, arr.length - 1);
    expect(sortedArr).toEqual([0, 1, 2, 4, 6, 7, 9, 10]);
  });

  it("Testing with empty array", () => {
    let arr = [];
    let sortedArr = quicksort(arr, 0, arr.length - 1);
    expect(sortedArr).toEqual([]);
  });
});
