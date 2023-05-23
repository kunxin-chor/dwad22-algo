class Node {
    // an empty node has no value and no neighbour
    value = null;
    next = null;

    // constructor
    // a constructor that a function that creates new instance of an object
    // if the `next` argument is not given a value, auto-set to null

    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    // set the neighbour of the node
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
}

module.exports = Node;