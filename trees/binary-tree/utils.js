// Function to create a new tree node
export function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Recursive function to build a binary tree of a given height
export function createTree(currentValue, maxHeight, currentHeight = 1) {
  if ((currentHeight > maxHeight)) return null;
  const node = createNode(currentValue);
  node.left = createTree(currentValue * 2, maxHeight, currentHeight + 1);
  node.right = createTree(currentValue * 2 + 1, maxHeight, currentHeight + 1);
  return node;
}

