function inOrderArray(root) {
    if(root === null) return [];

    let result = [];

    result = result.concat(inOrderArray(root.left));
    result.push(root.val);
    result = result.concat(inOrderArray(root.right));
    return result;
}

function postOrderArray(root) {
    if(root === null) return [];
    
    let result = [];
    result = result.concat(postOrderArray(root.left))
    result = result.concat(postOrderArray(root.right))
    result.push(root.val)
    return result;
}


module.exports = {
    inOrderArray,
    postOrderArray
};