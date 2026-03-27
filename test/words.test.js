/**
 * Test suite for words function
 */

import { expect } from "chai";
import words from "../src/words.js";

describe("words", function () {
  it("returns a string array for a comma separated string (ignoring special characters)", function () {
    expect(words("fred, barney, & pebbles")).to.deep.equal([
      "fred",
      "barney",
      "pebbles",
    ]);
  });
  it("returns a string array for string with regex expression", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).to.deep.equal([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });
});
