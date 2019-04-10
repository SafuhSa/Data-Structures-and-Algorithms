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
        this.inStack = new Stack();
        this.outStack = new Stack();
    }

    enqueue(val) {
        let newNode = new Node(val)
        if(!this.front) this.front = newNode;

        if(this.back) this.back.next = newNode;
        this.back = newNode;
        this.inStack.push(newNode);
        return this.size();
    }

    dequeue() {
        if(!this.size()) return null;
        if(this.size() === 1) this.back = null;
        if(!this.outStack.length) {
            while(this.inStack.length) {
                this.outStack.push(this.inStack.pop())
            }
        }
        this.outStack.pop();
        let removed = this.front;
        this.front = this.front.next;

        return removed;
    }

    size() {
        return this.inStack.length + this.outStack.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
