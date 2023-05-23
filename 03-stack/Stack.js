const LinkedList = require("../01-linked-list/LinkedList");
const Node = require("../01-linked-list/Node");

class Stack {
    linkedList = new LinkedList();

    // push: add to the top of the stack
    // assuming that the head is the top
    push(data) {
        this.linkedList.insertAt(0, new Node(data));
    }

    // pop: remove from the top
    pop(data) {
        this.linkedList.deleteAt(0);
    }

    peek() {
        return this.linkedList.getAt(0)?.getValue();
    }

    length() {
        return this.linkedList.length();
    }
}

module.exports = Stack;