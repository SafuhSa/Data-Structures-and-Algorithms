// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val=null, next=null) {
        this.value = val;
        this.next = next;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(obj) {
        let newNode = new Node(obj.value, obj.next)
        if(!this.bottom) {
            this.bottom = newNode;
        }
        newNode.next = this.top;
        this.top = newNode;
        return ++this.length;
    }

    pop() {
        if(!this.length) return null;
        if(this.top === this.bottom) this.bottom = null;

        let removedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return removedNode;
    }

    size() {
        return this.length;
    }

}

class StackQueue {
    constructor() {
        this.front = null;
        this.back = null;
        this.inStack = null;
        this.outStack = null;
        this.length = 0;
    }

    enqueue(val) {

    }

    dequeue() {

    }
    size() {
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
