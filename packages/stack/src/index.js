export class Stack {
  #items = [];

  pop() {
    return this.#items.pop();
  }

  push(item) {
    this.#items.push(item);
  }

  peek() {
    return this.#items.at(-1)
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    return this.#items.join(",");
  }
}
