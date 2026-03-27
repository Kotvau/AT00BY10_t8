/**
 * Test suite for difference function
 */

import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference", function () {
  it("returns the new array of filtered values", function () {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });
});
