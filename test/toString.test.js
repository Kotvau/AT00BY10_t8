/**
 * Test suite for toString function


import { expect } from "chai";
import toString from "../src/toString.js";

describe("toString", function () {
  it("returns empty string for null", function () {
    expect(toString(null)).to.equal("");
  });
  it("returns string number for number", () => {
    expect(toString(-0)).to.equal("-0");
  });
  it("returns comma separated string for array", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });
});
 */
