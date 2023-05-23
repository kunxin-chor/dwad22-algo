const Node = require('./Node');

const n1 = new Node(42);
console.log(n1);

// manually create a linked list
const n2 = new Node(101);
const n3 = new Node(103);
const n4 = new Node("Hello World");

n1.setNext(n2);
n2.setNext(n3);
n3.setNext(n4);

// in a LinkedList we only have access to the first node
// the `head` node
const head = n1;

// list traversal
let length = 0;
let currentNode = head;
while (currentNode != null) {
    console.log(currentNode.getValue());
    currentNode = currentNode.getNext();
    length++;
}
console.log("Length of linked list = ", length)
