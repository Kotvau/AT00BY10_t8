/**
 * Test suite for isDate function
 */

import { expect } from "chai";
import isDate from "../src/isDate.js";

describe("isDate", function () {
  it("returns true if parameter is a Date object", function () {
    expect(isDate(new Date())).to.equal(true);
  });
  it("returns false if parameter is not a Date object", () => {
    expect(isDate("Mon April 23 2012")).to.equal(false);
  });
});
