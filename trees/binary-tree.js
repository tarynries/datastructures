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
    const traverse = (node) => {
      if (node === null) {
        return 0;
      }
      if (node.left === null && node.right === null) {
        return 1;
      }
      if (node.left === null) {
        return traverse(node.right) + 1;
      }
      if (node.right === null) {
        return traverse(node.left) + 1;
      }
      return Math.min(traverse(node.left), traverse(node.right)) + 1;
    };

    return traverse(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const traverse = (node) => {
      if (node === null) {
        return 0;
      }
      if (node.left === null && node.right === null) {
        return 1;
      }
      if (node.left === null) {
        return traverse(node.right) + 1;
      }
      if (node.right === null) {
        return traverse(node.left) + 1;
      }
      return Math.max(traverse(node.left), traverse(node.right)) + 1;
    };

    return traverse(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSumValue = -Infinity;

    const maxSumRecursive = (node) => {
      if (node === null) {
        return 0;
      }

      const leftMaxSum = Math.max(0, maxSumRecursive(node.left));
      const rightMaxSum = Math.max(0, maxSumRecursive(node.right));

      const currentSum = node.val + leftMaxSum + rightMaxSum;
      maxSumValue = Math.max(maxSumValue, currentSum);

      return Math.max(leftMaxSum, rightMaxSum) + node.val;
    };

    maxSumRecursive(this.root);

    return maxSumValue === -Infinity ? 0 : maxSumValue;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const traverse = (node, lowerBound, closest) => {
      if (node === null) {
        return closest;
      }
      if (node.val > lowerBound && node.val < closest) {
        closest = node.val;
      }
      if (node.val > lowerBound && closest === null) {
        closest = node.val;
      }
      closest = traverse(node.left, lowerBound, closest);
      closest = traverse(node.right, lowerBound, closest);
      return closest;
    };

    return traverse(this.root, lowerBound, null);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    const getNodeLevelAndParent = (node, parent, level, target) => {
      if (node === null) {
        return null;
      }

      if (node.val === target) {
        return { level, parent };
      }

      const leftResult = getNodeLevelAndParent(node.left, node, level + 1, target);
      if (leftResult !== null) {
        return leftResult;
      }

      return getNodeLevelAndParent(node.right, node, level + 1, target);
    };

    const getNodeLevelAndParent1 = getNodeLevelAndParent(this.root, null, 0, node1.val);
    const getNodeLevelAndParent2 = getNodeLevelAndParent(this.root, null, 0, node2.val);

    if (
      getNodeLevelAndParent1 !== null &&
      getNodeLevelAndParent2 !== null &&
      getNodeLevelAndParent1.level === getNodeLevelAndParent2.level &&
      getNodeLevelAndParent1.parent !== getNodeLevelAndParent2.parent
    ) {
      return true;
    }

    return false;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
