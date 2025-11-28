class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    newNode.prev = current;
  }

  delete() {
    if (!this.head) return "Empty linked list";

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  traverse() {
    let current = this.head;
    let result = "null ";
    while (current) {
      result += current.value + " => ";
      current = current.next;
    }
    return result + "null";
  }
}

const list = new LinkedList();
list.add(4);
list.add(5);
list.add(10);
list.add(12);
list.add(16);
list.delete();
list.delete();
console.log(list.traverse());
