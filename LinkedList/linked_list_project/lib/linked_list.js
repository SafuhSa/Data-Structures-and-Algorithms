// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = null;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        
    }

    // TODO: Implement the removeTail method here
    removeTail() {

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node();
        newHead.next = this.head;
        this.head = newHead;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(this.head.next) {
            let newhead = this.head.next;
            this.head = this.head.next
        }else {
            this.head = undefined;
        }

        return this.head;
    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
