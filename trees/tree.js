/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const traverse = (node) => {
      if (node === null) {
        return 0;
      }
      let sum = node.val;
      for (const child of node.children) {
        sum += traverse(child);
      }
      return sum;
    };

    return traverse(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const traverse = (node) => {
      if (node === null) {
        return 0;
      }
      let count = node.val % 2 === 0 ? 1 : 0;
      for (const child of node.children) {
        count += traverse(child);
      }
      return count;
    };

    return traverse(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const traverse = (node, lowerBound) => {
      if (node === null) {
        return 0;
      }
      let count = node.val > lowerBound ? 1 : 0;
      for (const child of node.children) {
        count += traverse(child, lowerBound);
      }
      return count;
    };

    return traverse(this.root, lowerBound);

  }
}

module.exports = { Tree, TreeNode };
