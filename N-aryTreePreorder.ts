
class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val);
    this.children = [];
  };
};


function preorder(root: TreeNode | null): number[] {
  if (root == null) return new Array<number>(0);

  const preOrderList = new Array<number>();

  preOrderHelper(root, preOrderList);

  return preOrderList;
};

function preOrderHelper(root: TreeNode, preOrderList: Array<number>) {
  preOrderList.push(root.val);

  root.children.forEach((child) => {
    preOrderHelper(child, preOrderList);
  });
};

export { };