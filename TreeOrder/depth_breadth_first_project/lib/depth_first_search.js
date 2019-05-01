function depthFirstSearch(root, targetVal) {
    
    
    
    let stack = [root];
    while (stack.length) {
        let last = stack[stack.length - 1];
        if(last.val === targetVal) return last;
        if (last.left) {
            if (last.left.val === targetVal) return last.left;
            stack.push(last.left)
        }else if(last.right) {
            if (last.right.val === targetVal) return last.right;
            stack.push(last.right)
        }else {
            stack.pop()
        }k
    }
    return null;
}


module.exports = {
    depthFirstSearch
};

