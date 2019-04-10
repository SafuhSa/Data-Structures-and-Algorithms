// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//min [10, 8, 2]
//max [10, 12, 20]
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.maxs = [];
        this.mins = [];
    }
    
    min() {
        if(!this.mins.length) return null
        return this.mins[this.mins.length -1]
    }
    
    max() {
        if(!this.maxs.length) return null
        return this.maxs[this.maxs.length -1]
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            this.maxs.push(newNode)
            this.mins.push(newNode)
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
            if (this.max().value < newNode.value) {
                this.maxs.push(newNode);
            } else if (this.min().value > newNode.value) {
                this.mins.push(newNode)
            }
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) return null;

        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
            this.mins = [];
            this.maxs = [];
        }
        
        this.top = this.top.next;
        if (this.min() === temp) {
            this.mins.pop()
        } else if (this.max() === temp) {
            this.maxs.pop();
        }

        this.length--;
        return temp;
    }
    

    size() {
        return this.length;
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
