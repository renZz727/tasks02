class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtBeginning(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtSpecificPosition(val, pos) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    let count = 0;
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    while (count < pos - 1) {
      current = current.next;
      count++;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  deleteAtEnd() {
    if (!this.head) {
      return "empty linked list";
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  deleteAtBeginning() {
    if (!this.head) {
      return "empty linked list";
    }
    this.head = this.head.next;
  }

  deleteAtSpecificPosition(pos) {
    if (!this.head) {
      return "empty linked list";
    }
    let current = this.head;
    for (let i = 0; i < pos; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  traverse() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " => ";
      current = current.next;
    }
    result += "null";

    return result;
  }
}
const list = new linkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtBeginning(3);
list.insertAtBeginning(12);
list.insertAtBeginning(16);
list.insertAtSpecificPosition(4, 2);
list.deleteAtEnd();
list.deleteAtBeginning();
list.deleteAtSpecificPosition(1);
console.log(list.traverse());
