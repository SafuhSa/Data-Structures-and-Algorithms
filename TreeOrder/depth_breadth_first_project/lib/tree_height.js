function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
    // let height = -1;
    // let stack = [];

    // if(root) stack.push(root);

    // while(stack.length) {
    //     let arr = [];

    //     for(let i = 0; i < stack.length; i++) {
    //         let node = stack[i];

    //       if(node.left)  arr.push(node.left);
    //       if(node.right) arr.push(node.right);
    //     }
    //     stack = arr;
    //     height++;
    // }
    // return height;
}


module.exports = {
    treeHeight
};