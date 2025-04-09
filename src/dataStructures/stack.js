export default class Stack {
  #items;
  constructor() {
    this.#items = [];
  }
  push(val) {
    this.#items.push(val);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items.pop();
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items[this.#items.length - 1];
  }
  size() {
    this.#items.length;
  }
  clear() {
    this.#items = [];
  }
}