// peek pop push on prototype, count
const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }
  get count() {
    return _stack.get(this).length;
  }

  push(element) {
    _stack.get(this).push(element);
  }

  pop() {
    const stack = _stack.get(this);

    if (stack.length === 0) throw new Error("Stack is empty.");
    return stack.pop();
  }

  peek() {
    const stack = _stack.get(this);

    if (stack.length === 0) throw new Error("Stack is empty.");
    return stack[stack.length - 1];
  }
}
