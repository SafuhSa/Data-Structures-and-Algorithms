function breadthFirstArray(root) {
    let node = root;
    while(node) {

        node = node.left;
    }
}

module.exports = {
    breadthFirstArray
};