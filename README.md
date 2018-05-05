# - 15 - Binary Tree

## Overview: Implementation of an in-order traversal function for a binary tree data structure. Includes a `node` module to establish left and right values, a `binary-tree` module establishing the root property, and a `traversals` module detailing the different traversal path functions.

### Node Module
```export default class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}```

### Binary-Tree Module
```export default class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}```