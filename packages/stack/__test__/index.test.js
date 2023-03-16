import { vi } from "vitest";
import { describe, it, expect } from "vitest";
import { Stack } from "../src";

describe("stack test", () => {
  it("basic", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toString()).toBe("1,2,3");
    expect(stack.peek()).toBe(3);
    expect(stack.size()).toBe(3);

    stack.pop();
    expect(stack.toString()).toBe("1,2");

    stack.clear();
    expect(stack.toString()).toBe("");

    expect(stack.isEmpty()).toBe(true);
  });
});
