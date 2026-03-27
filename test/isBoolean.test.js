/**
 * Test suite for isBoolean function
 */

import { expect } from "chai";
import isBoolean from "../src/isBoolean.js";

describe("isBoolean", function () {
  it("returns true if parameter is boolean", function () {
    expect(isBoolean(false)).to.equal(true);
  });
  it("returns false if parameter is boolean", () => {
    expect(isBoolean(null)).to.equal(false);
  });
});
