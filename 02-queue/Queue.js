const LinkedList = require("../01-linked-list/LinkedList");
const Node = require("../01-linked-list/Node");
class Queue {
    // the inner storage is done via a linked list
    list = new LinkedList();

    // join the queue
    // add to the back the linked list
    enqueue(data) {
        this.list.push(new Node(data));
    }

    dequeue() {
        this.list.deleteAt(0);
    }

    length() {
        return this.list.length();
    }

    // should peek return the value 
    peek() {
        // const frontNode = this.list.getAt(0);
        // if (frontNode != null) {
        //     return frontNode.getValue();
        // } else {
        //     return null;
        // }

        return this.list.getAt(0)?.getValue();
    }
}

module.exports = Queue;