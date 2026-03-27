/**
 * Test for the divide function.
 *
 */

import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide", function () {
  it("divides two numbers correctly", function () {
    expect(divide(6, 4)).to.equal(1.5);
  });
});
