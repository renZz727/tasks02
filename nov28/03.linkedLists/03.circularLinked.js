class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
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
    newNode.next = this.head;
    console.log(this.head);
  }

  delete() {
    if (!this.head) {
      return "empty linked list";
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  traverse() {
    let result = "";
    if (!this.head) {
      return "empty linked list";
    }
    let current = this.head;
    while (current === this.head) {
      result += current.value + " => ";
      current = current.next;
    }
    return result + "null";
  }
}

const list = new LinkedList();
list.add(4);
list.add(6);
list.add(7);
console.log(list.traverse());
