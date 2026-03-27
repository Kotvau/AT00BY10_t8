import { expect } from "chai";
import isLength from "../src/isLength.js";

describe("isLength", function () {
  it("returns true for valid integer length", function () {
    expect(isLength(3)).to.equal(true);
  });
  it("returns false for string numbers", function () {
    expect(isLength("3")).to.equal(false);
  });
  it("returns false for Number.MIN_VALUE", function () {
    expect(isLength(Number.MIN_VALUE)).to.equal(false);
  });
  it("returns false for infinity", function () {
    expect(isLength(Infinity)).to.equal(false);
  });
  it("returns false for negative integer", function () {
    expect(isLength(-1)).to.equal(false);
  });
  it("returns false for decimal numbers", function () {
    expect(isLength(1.5)).to.equal(false);
  });
  it("returns false for integer that is bigger than max safe integer", function () {
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).to.equal(false);
  });
});
