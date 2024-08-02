class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(initialSize = 0) {
    this.head = null;
    this.size = initialSize;
    for (let i = 1; i <= initialSize; i++) {
      this.add(i);
    }
  }
  getSize() {
    return this.size;
  }

  incrementSize() {
    this.size = this.size + 1;
    return this.size;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.incrementSize();
  }

  remove(value) {
    if (this.head === null) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let cursor = this.head;
    while (cursor.next !== null && cursor.next.value !== value) {
      cursor = cursor.next;
    }
    if (cursor.next !== null) {
      cursor.next = cursor.next.next;
    }
  }

  reverse() {
    let cursor = this.head;
    let previous = null;
    while (cursor !== null) {
      const next = cursor.next;
      cursor.next = previous;
      previous = cursor;
      cursor = next;
    }
    this.head = previous;
  }

  getLinkedList() {
    return this.head;
  }
}

// Example usage:
const list = new LinkedList(3); // Creates a linked list with 3 nodes
console.log(list.getLinkedList());
