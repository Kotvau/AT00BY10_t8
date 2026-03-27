/**
 * Test suite for ceil function
 */

import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", function () {
  it("returns integer rounded up if no precision specified", function () {
    expect(ceil(4.006)).to.equal(5);
  });
  it("returns number rounded up with decimals according to specified precision", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });
  it("returns number rounded up using negative precision e.g. (tens, hundreds..) ", () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });
});
