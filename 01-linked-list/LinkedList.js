class LinkedList {
    head = null;

    // add a new node to the back of the linked list
    push(newNode) {
        // // if the list is empty,
        // // then the newNode becomes the head
        // if (this.head == null) {
        //     this.head = newNode;
 
        // } else {
        //     let currentNode = this.head;
        //     // traverse until the last node (Not past it)
        //     while (currentNode.getNext() != null) {
        //         currentNode = currentNode.getNext();
        //     }
        //     currentNode.setNext(newNode);

        // }
   
        if (this.length() > 0) {
            this.insertAt(this.length(), newNode);
        } else {
            this.insertAt(0, newNode);
        }
       
    }

    getAt(index) {
        let currentNode = this.head;
        for (let i =0; i < index; i++) {
            currentNode = currentNode.getNext();
        }
        return currentNode;
    }

    insertAt(index, newNode) {
        // assume that the head is index 0
        // the `index` argument is where the newNode should be
        
        // 1. check if index out of bound
    

        // 2. check if we are replacing the head
        if (index == 0 && this.head == null) {
            this.head = newNode;
        }
        else if (this.headindex < 0 || index > this.length()) {
            return;
        }
        // 3. check if we are replacing the head if there is already a head
        else if (index == 0 && this.head != null) {
            newNode.setNext(this.head);  // set the next of the newNode to be the current head
            this.head = newNode;
        } 
       
        else {
            let currentNode = this.head;
            // loop to the node BEFORE the insert
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.getNext();
            }
            // the currentNode will be the node before the replacement
            newNode.setNext(currentNode.getNext());
            currentNode.setNext(newNode);
        }
    }

    print() {
        let currentNode = this.head;
        // traverse until the last node (Not past it)
        while (currentNode != null) {
            console.log(currentNode.getValue());
            currentNode = currentNode.getNext();

        }

    }

    length() {
        let currentNode = this.head;
        let count = 0;
        while (currentNode != null) {
            count++;
            currentNode = currentNode.getNext();
        }
        return count;
    }

    traverse(processFunc) {
        let currentNode = this.head;
        while (currentNode != null) {
            processFunc(currentNode);
            currentNode = currentNode.getNext();
        }
    }

    deleteAt(index) {
        if (this.head==null) {
            return;
        } else if (index < 0 || index > this.length() -1) {
            return;
        } else if (index == 0) {
            this.head = this.head.getNext(); 
        } else {
            let currentNode = this.head;
            for (let i =0; i < index -1; i++) {
                currentNode = currentNode.getNext();
            }
            // store the node left to the one we want to delete
            const leftNode = currentNode;
            // store the node right to the one want to delete
            const rightNode = leftNode.getNext().getNext();

            // alternatively: currentNode.setNext(currentNode.getNext().getNext())
            leftNode.setNext(rightNode);
        }
    }

}

module.exports = LinkedList;