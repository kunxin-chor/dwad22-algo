const Queue = require('./Queue');

let q = new Queue();
let q2 = new Queue();
q.enqueue("Alice");
q.enqueue("Bob");
q.enqueue("John");

while (q.peek() != null) {
    const name = q.peek();
    console.log(name);
    q2.enqueue(name);
    q.dequeue();
}

q = q2;