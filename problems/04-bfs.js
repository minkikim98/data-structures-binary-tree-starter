// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.

function bfs(root) {
    if (!root) return [];
    let Q = [root];
    let ans = [];
    
    while(Q.length > 0) {
        let node = Q.shift();
        ans.push(node.val);
        if (node.left) Q.push(node.left);
        if (node.right) Q.push(node.right);
    }
    return ans;
}

module.exports = { bfs };