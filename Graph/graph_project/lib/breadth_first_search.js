function breadthFirstSearch(startingNode, targetVal) {
    let set = new Set();
    let stack = [ startingNode ];

    while(stack.length) {
        let node = stack.shift();
        if (node.val === targetVal) return node;
        if(set.has(node)) continue;
        set.add(node);
        stack = [...stack, ...node.neighbors];
    } 
    return null;
}

module.exports = {
    breadthFirstSearch
};