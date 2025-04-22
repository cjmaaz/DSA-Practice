export default class MinStack {
  #items;
  #min;

  constructor() {
    this.#items = [];
    this.#min = null;
  }

  push(item) {
    if (typeof item !== "number") {
      throw new Error("Stack only accepts numeric items.");
    }
    if (this.#items.length === 0) {
      this.#min = item;
      this.#items.push(item);
    } else if (item >= this.#min) {
      this.#items.push(item);
    } else {
      const encodedValue = 2 * item - this.#min;
      this.#items.push(encodedValue);
      this.#min = item;
    }
  }

  peek() {
    if (this.#items.length === 0) {
      throw new Error("Stack is empty.");
    }
    const top = this.#items[this.#items.length - 1];
    return top < this.#min ? this.#min : top;
  }

  pop() {
    if (this.#items.length === 0) {
      throw new Error("Stack is empty.");
    }
    const top = this.#items.pop();
    if (top >= this.#min) {
      return top;
    } else {
      const actualMin = this.#min;
      this.#min = 2 * this.#min - top;
      return actualMin;
    }
  }

  getMin() {
    if (this.#items.length === 0) {
      throw new Error("Stack is empty.");
    }
    return this.#min;
  }
}