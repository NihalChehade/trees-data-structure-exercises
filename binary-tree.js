/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function _minDepth(node) {
      if (node === null) return 0;
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return _minDepth(node.right) + 1;
      if (node.right === null) return _minDepth(node.left) + 1;
      return Math.min(_minDepth(node.left), _minDepth(node.right)) + 1;
    }

    return _minDepth(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function _maxDepth(node) {
      if (node === null) return 0;
      return Math.max(_maxDepth(node.left), _maxDepth(node.right)) + 1;
    }

    return _maxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;

    function _maxSum(node) {
      if (node === null) return 0;
      const leftSum = Math.max(0, _maxSum(node.left));
      const rightSum = Math.max(0, _maxSum(node.right));
      maxSum = Math.max(maxSum, leftSum + rightSum + node.val);
      return node.val + Math.max(leftSum, rightSum);
    }

    _maxSum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let closest = null;

    function _traverse(node) {
      if (node === null) return;

      if (node.val > lowerBound && (closest === null || node.val < closest)) {
        closest = node.val;
      }

      _traverse(node.left);
      _traverse(node.right);
    }

    _traverse(this.root);
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
