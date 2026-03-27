/**
 * Test suite for clamp function
 */

import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp", function () {
  it("return two 2 element arrays with 4 element array and size 2", function () {
    expect(clamp(-100, -5, 5)).to.equal(-5);
  });
  it("return one 3 element array with 1 remaining element for 4 element array and size 3", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });
});
