function maxValue(node, visited=new Set()) {
    if(visited.has(node)) return;

    visited.add(node);

    let max = node.val;

    node.neighbors.forEach(node1 => {
        let recMax = maxValue(node1, visited);
        if (max < recMax) {
            max = recMax;
       }
    });

    return max;
}

module.exports = {
    maxValue
};