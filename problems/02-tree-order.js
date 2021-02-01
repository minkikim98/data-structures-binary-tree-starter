// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root) {
    if (root === null) return [];
    let left = preOrderArray(root.left);
    let right = preOrderArray(root.right);
    return [root.val, ...left, ...right];
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    if (!root) return [];
    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);
    return [...left, root.val, ...right];
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    if (!root) return [];
    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);
    return [...left, ...right, root.val];
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
