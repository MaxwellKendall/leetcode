import { writeOutputToDisk } from '../../utils';
import { createTree } from './utils';

const TREE_DEPTH = 10;

// Recursive
function recursive(node) {
  if (node === null) return [];

  // Recursively traverse the left subtree
  recursive(node.left);

  // Recursively traverse the right subtree
  recursive(node.right);
  return [node.value, ...recursive(node.left), ...recursive(node.right)];
}

// Iterative DFS
function iterative(root) {
  if (root === null) return;

  const stack = [root];
  const traversalPath = [];

  while (stack.length > 0) {
    const node = stack.pop();

    // Process the current node (pre-order traversal)
    traversalPath.push(node.value);

    // Push the right child first so that the left child is processed first
    if (node.right !== null) {
      stack.push(node.right);
    }

    // Push the left child
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return traversalPath;
}

const implementations = {
  recursive,
  iterative,
};

// Create the root node and build the tree with height 20
const root = createTree(1, TREE_DEPTH);

// Perform DFS traversal
// implementations.iterative(root);
const traversalPath = implementations.recursive(root);
writeOutputToDisk(traversalPath, `depth-first-serach-at-${TREE_DEPTH}.json`);
