/**
 * Test suite for isObject function
 */

import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject", function () {
  it("returns true if parameter is object", function () {
    expect(isObject({})).to.equal(true);
  });
  it("returns true if parameter an array object", () => {
    expect(isObject([1, 2, 3])).to.equal(true);
  });
  it("returns true if parameter function object", () => {
    expect(isObject(Function)).to.equal(true);
  });
  it("returns false if parameter is null", () => {
    expect(isObject(null)).to.equal(false);
  });
});
