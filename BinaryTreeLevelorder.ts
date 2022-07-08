//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  };
};

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return new Array<Array<number>>(0);

  let children = new Array<TreeNode>();
  let currentQueue = new Array<TreeNode>();
  const levelOrderTraversel = new Array<Array<number>>();
  let visitedNodes = new Array<number>();

  currentQueue.push(root);

  while (currentQueue.length > 0) {
    let current = currentQueue.shift();
    if (current != undefined) {
      // console.log(current.val, children);

      visitedNodes.push(current?.val);
      if (current.left) children.push(current.left);
      if (current.right) children.push(current.right);
      if (currentQueue.length == 0) {
        levelOrderTraversel.push(visitedNodes);
        visitedNodes = new Array<number>();
        currentQueue = children;
        children = new Array<TreeNode>();
      };
    };
  };

  return levelOrderTraversel;
};

(() => {
  const root = new TreeNode(1);
  const one = new TreeNode(2);
  const two = new TreeNode(3);
  const three = new TreeNode(4);
  const four = new TreeNode(5);

  root.left = one;
  root.right = two;
  two.left = three;
  two.right = four;

  console.log(levelOrder(root));
})();

export { };
