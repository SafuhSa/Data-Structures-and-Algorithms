function breadthFirstArray(root) {
    let arr = [root];
    let result = [];

    while(arr.length) {
        let node = arr.shift();
        result.push(node.val)

        if(node.left) arr.push(node.left);
        if(node.right) arr.push(node.right);
    }

    return result;
}

module.exports = {
    breadthFirstArray
};