### What is a Binary Tree?

A binary tree is a special data structure in computer science that looks like an upside-down tree. Each parent node can have at most two children, called the "left child" and the "right child."

#### Vocabulary
- **Root**: The topmost node of the tree. Think of it as the starting point.
- **Node**: Each element in the tree. It can have a value and links to its children.
- **Left Child**: The node on the left side of a parent node.
- **Right Child**: The node on the right side of a parent node.
- **Leaf**: A node that doesn't have any children.

#### Example
Here's a simple binary tree with numbers:

    1
   / \
  2   3
 / \
4   5

- The root is `1`.
- `1` has two children: `2` (left child) and `3` (right child).
- `2` has two children: `4` (left child) and `5` (right child).
- `3`, `4`, and `5` are leaves because they don't have any children.

#### JavaScript Example

Here's how you can create a simple binary tree in JavaScript:

```javascript
// Function to create a binary tree node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null
  };
}

// Recursive function to build a binary tree of a given height
function buildTree(currentHeight, maxHeight) {
  if (currentHeight > maxHeight) return null;
  const node = createNode(currentHeight);
  node.left = buildTree(currentHeight + 1, maxHeight);
  node.right = buildTree(currentHeight + 1, maxHeight);
  return node;
}

// Create the root node and build the tree with height 20
const root = buildTree(1, 20);
```