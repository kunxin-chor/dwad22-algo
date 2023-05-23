const LinkedList = require("./LinkedList");
const Node = require("./Node");

const list = new LinkedList();

const n1 = new Node("Hello World");
list.push(n1);
list.push(new Node(42));
list.push(new Node("Mary Sue"));

list.print();

list.traverse((n)=>{
    console.log(n.getValue())
});

console.log("------------------")

const list2 = new LinkedList();
list2.insertAt(0, new Node("start"));
list2.push(new Node("42"));
list2.insertAt(0, new Node("new start"));
list2.insertAt(1, new Node("-99"));
list2.print();
console.log("------ after deleting index 1--------")
list2.deleteAt(1);
list2.print();
console.log("------ after deleting index 0 -------")
list2.deleteAt(0);
list2.print();