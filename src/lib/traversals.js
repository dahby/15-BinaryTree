'use strict';

let preOrderOutput = '';
let inOrderOutput = '';
let postOrderOutput = '';

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  preOrderOutput += rootNode.value;
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  // console.log(preOrderOutput[3]);
  // console.log(preOrderOutput);
  return preOrderOutput;
};

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  inOrderOutput += rootNode.value;
  // console.log(`Visiting a node with value ${rootNode.value}`);
  inOrderTraversal(rootNode.right);
  return inOrderOutput;
};

const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  postOrderOutput += rootNode.value;
  // console.log(`Visiting a node with value ${rootNode.value}`);
  return postOrderOutput;
};

export { preOrderTraversal, inOrderTraversal, postOrderTraversal };
