function treeSum(root) {
    if (!root) return 0;

    let sum = root.val;
    sum += treeSum(root.left);
    sum += treeSum(root.right);
    return sum;
    // let sum = 0;
    // let stack =[];
    // if(root) stack.push(root)
    // while(stack.length) {
    //     let node = stack.shift();
    //     sum += node.val;
    //     if(node.left) stack.push(node.left);
    //     if(node.right) stack.push(node.right);
    // }

    // return sum;
}


module.exports = {
    treeSum
};