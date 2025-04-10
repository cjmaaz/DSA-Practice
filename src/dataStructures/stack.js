export default class Stack {
  #items;
  constructor() {
    this.#items = [];
  }
  get isEmpty() {
    return this.#items.length === 0;
  }
  push(item) {
    this.#items.push(item);
    return item;
  }
  pop() {
    if (this.isEmpty) {
      return null;
    }
    return this.#items.pop();
  }
  peek() {
    if (this.isEmpty) {
      return null;
    }
    return this.#items[this.#items.length - 1];
  }
  size() {
    return this.#items.length;
  }
  toString() {
    return this.#items.toString();
  }
}