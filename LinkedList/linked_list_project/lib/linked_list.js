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
        this.value = val;
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
        let newtail = new Node(val)
        if(this.length === 0) {
            this.head = newtail;
        } else {
            this.tail.next = newtail;
        }

        this.tail = newtail;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0) return undefined;
        let newtail = this.head;
        let node = this.head.next;

        while(node && node.next) {
            newtail = node;
            node = node.next;
        }
        this.tail = newtail;
        this.tail.next = null;
 
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.length -=1;
        return node;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        if(this.length === 0) {
            this.tail = newHead;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.length) return undefined;
        if(this.length === 1) this.tail = null;
        let removedhead = this.head;
        this.head = this.head.next;

        this.length -= 1;
        return removedhead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;

        while(node) {
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node = this.head;
        while(index > 0) {
            index -= 1;
            node = node.next;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if(!node) return false;
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.addToHead(val);
        if(index === this.length) return !!this.addToTail(val)

        let prevNode = this.get(index -1);
        let currentNode = new Node(val);
        currentNode.next = prevNode.next;
        prevNode.next = currentNode;
        this.length +=1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        let prevNode = this.get(index -1);
        let currNode = prevNode.next;
        let nextNode = currNode.next;
        prevNode.next = nextNode;
        this.length -= 1;
        return currNode;
    }

    // TODO: Implement the size method here
    size() {
       return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
