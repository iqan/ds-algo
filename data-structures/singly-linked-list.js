class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
      this.head = this.tail;
    } else {
      this.tail.next = node;
      this.tail = next;
    }
    length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    let removed = this.tail;
    current.next = null;
    this.tail = current;
    length--;
    if(length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removed;
  }

  shift() {
    if(!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while(count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let found = this.get(index);
    if(found) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) {
      return !!this.push(val);
    }
    if(index === 0) {
      return !!this.unshift(val);
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length - 1) {
      return this.pop();
    }
    if(index === 0) {
      return this.shift();
    }
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = null;
      prev = node;
      node = next;
    }
    return this;
  }
}