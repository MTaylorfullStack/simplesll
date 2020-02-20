class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

myNode = new Node(10); 

class SLL {
    constructor() {
        this.head = null;
    }
    // a method for adding nodes to the front of our list
    addFront(value) {
        // creating new node
        newNode = new Node(value);
        // forming connection from newNode to current head node
        newNode.next = this.head;
        // reassigning this Singly Linked List's head to newNode
        this.head = newNode;
        // returning this, allowing for chaining methods
        return this
    }
    // a method for viewing our list
    view() {
        // will have to see all of the nodes...
        // starting from the beginning of our list
        var currentNode = this.head;
        // as long as currentNode exists, or is NOT null
        while(currentNode) {
            console.log(`current nodes value is ${currentNode.value}`)
            // moving on to next node
            currentNode = currentNode.next
        }
    } 
}