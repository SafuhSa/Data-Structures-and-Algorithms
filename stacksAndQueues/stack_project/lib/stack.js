// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val = null, next=null) {
    this.value = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val)
    if(!this.bottom) {
      this.bottom = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) return null;
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    
    let removedtop = this.top;
    this.top = this.top.next;
    this.length -=1;
    return removedtop.value;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
