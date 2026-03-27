/**
 * Test suite for toFinite function
 */

import { expect } from "chai";
import toFinite from "../src/toFinite.js";

describe("toFinite", function () {
  it("returns input if it's a number", () => {
    expect(toFinite(3.2)).to.equal(3.2);
  });
  it("returns minimum finite number for Number.MIN_VALUE", () => {
    expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
  });
  it("returns maximum finite number for infinity", () => {
    expect(toFinite(Infinity)).to.equal(1.7976931348623157e308);
  });
  it("returns number for string number", () => {
    expect(toFinite("3.2")).to.equal(3.2);
  });
});
