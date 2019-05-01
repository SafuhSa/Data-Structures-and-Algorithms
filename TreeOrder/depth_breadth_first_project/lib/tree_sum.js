function treeSum(root) {
    let sum = 0;
    let stack =[];
    if(root) stack.push(root)
    while(stack.length) {
        let node = stack.shift();
        sum += node.val;
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }

    return sum;
}


module.exports = {
    treeSum
};