/**
 * Test suite for isSymbol function
 */

import { expect } from "chai";
import isSymbol from "../src/isSymbol.js";

describe("isSymbol", function () {
  it("returns true if parameter is symbol primitive or object", function () {
    expect(isSymbol(Symbol.iterator)).to.equal(true);
  });
  it("returns false if parameter is string", () => {
    expect(isSymbol("abc")).to.equal(false);
  });
});
