const Stack = require('./Stack');

let s = new Stack();
s.push("Alice");
s.push("Bob");
s.push("Charile");

console.log(s.peek());

while (s.peek() != null) {
    console.log(s.peek());
    q.enqueue(s.peek());
    s.pop();
}

