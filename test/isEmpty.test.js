/**
 * Test suite for isEmpty function
 */

import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", function () {
  it("returns true if parameter is null", function () {
    expect(isEmpty(null)).to.equal(true);
  });
  it("returns true if parameter is true", () => {
    expect(isEmpty(true)).to.equal(true);
  });
  it("returns true if parameter is 1", () => {
    expect(isEmpty(1)).to.equal(true);
  });
  it("returns false if parameter is an array", () => {
    expect(isEmpty([1, 2, 3])).to.equal(false);
  });
  it("returns false if parameter is string", () => {
    expect(isEmpty("abc")).to.equal(false);
  });
  it("returns false if parameter is JSON", () => {
    expect(isEmpty({ a: 1 })).to.equal(false);
  });
});
