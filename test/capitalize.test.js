/**
 * Test suite for capitalize function
 */

import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize", function () {
  it("returns capitalized string", function () {
    expect(capitalize("FRED")).to.equal("Fred");
  });
});
