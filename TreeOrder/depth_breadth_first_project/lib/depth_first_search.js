function depthFirstSearch(root, targetVal) {
    
    
    
    let stack = [root];
    while (stack.length) {
        let last = stack[stack.length - 1];
        if (last.val === targetVal) {
            return last;
        }

        if (last.left) {
            stack.push(last.left);
        } else if (last.right) {
            stack.push(last.right);
        }
    }

    return null;
}


module.exports = {
    depthFirstSearch
};

