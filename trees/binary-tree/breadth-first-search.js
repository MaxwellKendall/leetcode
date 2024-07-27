import { writeOutputToDisk } from '../../utils';
import { createTree } from './utils';

const TREE_DEPTH = 10;

// Breadth-First Search (BFS) function
function breadthFirstSearch(root) {
  if (root === null) return;

  const queue = [root];
  const everyTreeValue = [];

  while (queue.length > 0) {
    const node = queue.shift();

    // Process the current node
    everyTreeValue.push(node.value);

    // Enqueue the left child
    if (node.left !== null) {
      queue.push(node.left);
    }

    // Enqueue the right child
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return everyTreeValue;
}

// Create the root node and build the tree with height 20
const root = createTree(1, TREE_DEPTH);

// Perform BFS traversal
const traversalPath = breadthFirstSearch(root);
writeOutputToDisk(
  traversalPath,
  `breadth-first-search-at-depth-${TREE_DEPTH}.json`
);

