/**
 * Tests for toInteger function
 */

import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger", function () {
  it("Converts decimal number to integer", function () {
    expect(toInteger(3.2)).to.equal(3);
  });
  it("Converts MIN_VALUE to 0", function () {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
  });
  it("Converts Infinity to finite number", function () {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e308);
  });
  it("Converts string number to integer", function () {
    expect(toInteger("3.2")).to.equal(3);
  });
  it("Converts negative decimal number to integer", function () {
    expect(toInteger(-3.2)).to.equal(-3);
  });
  it("Converts integer to negative integer", function () {
    expect(toInteger(3)).to.equal(3);
  });
  it("Converts string of chars to 0", function () {
    expect(toInteger("abc")).to.equal(0);
  });
});
