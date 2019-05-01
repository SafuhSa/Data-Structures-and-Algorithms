function depthFirstSearch(root, targetVal) {
    
    let stack = [root];
    
    while (stack.length) {
        let node = stack.shift();
        if(node.val === targetVal) return node;

        if(node.right) {
            stack.unshift(node.right);
        }

        if(node.left) {
            // if(node.left.val === targetVal) return node.left;
            stack.unshift(node.left);
        }
    }
    return null;
}


module.exports = {
    depthFirstSearch
};


// if(last.val === targetVal) return last;

// if (last.left) {
//     if (last.left.val === targetVal) return last.left;
//     stack.push(last.left)
// }else if(last.right) {
//     if (last.right.val === targetVal) return last.right;
//     stack.push(last.right)
// }else {
//     stack.pop()
// }