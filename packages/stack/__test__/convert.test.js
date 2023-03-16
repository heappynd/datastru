import { describe, expect, it } from "vitest";
import convert from "../examples/convert";

describe("convert test", () => {
  it("test 50 2", () => {
    expect(convert(50)).toBe("110010");
  });

  it("test 50 8", () => {
    expect(convert(50, 8)).toBe("62");
  });

  it("test 50 16", () => {
    expect(convert(50, 16)).toBe("32");
  });

  it("test 500 16", () => {
    expect(convert(500, 16)).toBe("1F4");
  });
});
