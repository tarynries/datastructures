class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this.insertNodeRecursively(this.root, val);
    return this;
  }

  insertNodeRecursively(node, val) {
    if (node === null) {
      return new Node(val);
    }

    if (val < node.val) {
      node.left = this.insertNodeRecursively(node.left, val);
    } else {
      node.right = this.insertNodeRecursively(node.right, val);
    }

    return node;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;

    function searchNode(node, val) {
      if (node === null) return undefined;

      if (val === node.val) {
        return node;
      } else if (val < node.val) {
        return searchNode(node.left, val);
      } else {
        return searchNode(node.right, val);
      }
    }

    return searchNode(this.root, val);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) return;

      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }

    traverse(this.root);

    return result;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [];
    const result = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;
