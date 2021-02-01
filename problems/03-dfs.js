// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root){
    if (!root) return [];
    let left = dfs(root.left);
    let right = dfs(root.right);
    return [root.val, ...left, ...right];
}

module.exports = { dfs };