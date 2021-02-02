// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');
function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;

  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);

  let midIdx = inorder.indexOf(rootVal);

  let leftIndorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx + 1);

  let leftPreoder = preorder.filter((value) => leftIndorder.includes(value));
  let rightPreoder = preorder.filter((value) => rightInorder.includes(value));

  root.left = buildTree(leftPreoder, leftIndorder);
  root.right = buildTree(rightPreoder, rightInorder);

  return root;
};