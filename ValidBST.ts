
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

function isValidBST(root: TreeNode | null): boolean {

  function check(root: TreeNode | null, min: number, max: number): boolean {
    if (root == null) return true;
    if (root.val >= max || root.val <= min) return false;

    return check(root.left, min, root.val) || check(root.right, root.val, max);

  };

  return check(root, -Infinity, Infinity);
};

export { };