const { twoSum } = require("./two-sum");

describe("two-sum", () => {
  it("passes case ([2, 7, 11, 15], 9)", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
