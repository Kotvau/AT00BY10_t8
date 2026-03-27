/**
 * Test suite for eq function
 */

import { expect } from "chai";
import eq from "../src/eq.js";

const object = { a: 1 };
const other = { a: 1 };

describe("eq", function () {
  it("returns true if parameters are the same object", function () {
    expect(eq(object, object)).to.equal(true);
  });
  it("returns false if parameters are different objects (with same values)", () => {
    expect(eq(object, other)).to.equal(false);
  });
  it("returns true if parameters are the same strings", () => {
    expect(eq("a", "a")).to.equal(true);
  });
  it("returns false if one parameter is a string and other is a string object", () => {
    expect(eq("a", Object("a"))).to.equal(false);
  });
  it("returns true if parameters are NaNs", () => {
    expect(eq(NaN, NaN)).to.equal(true);
  });
});
