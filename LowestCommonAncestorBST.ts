
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


function lowestCommonAncestor(root: TreeNode, firstNode: TreeNode, secondNode: TreeNode): TreeNode {

  const firstAnsectors = new Set<TreeNode>();
  const secondAnsectors = new Set<TreeNode>();

  function findAncestors(root: TreeNode | null, node: TreeNode, ansectors: Set<TreeNode>): boolean {
    if (root == null) return false;
    if (root.val == node.val) {
      ansectors.add(root);
      return true;
    };

    let flag: boolean;

    if (findAncestors(root.left, node, ansectors)) {
      ansectors.add(root);
      return true;
    } else flag = false;

    if (findAncestors(root.right, node, ansectors)) {
      ansectors.add(root);
      return flag || true;
    } else return flag || false;
  };

  findAncestors(root, firstNode, firstAnsectors);
  findAncestors(root, secondNode, secondAnsectors);

  let ans = new TreeNode();
  let flag = true;

  firstAnsectors.forEach((ansector) => {
    if (secondAnsectors.has(ansector) && flag) {
      ans = ansector;
      flag = false;
    };
  });

  return ans;
};