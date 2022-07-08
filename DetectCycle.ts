class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  };
};

function detectCycle(head: ListNode | null): ListNode | null {

  const nodeSet = new Set<ListNode>();
  let temp = head;

  while (temp != null) {
    if (temp.next != null) {
      if (nodeSet.has(temp.next)) return temp.next;
    };
    nodeSet.add(temp);
    temp = temp.next;
  };

  return null;
};

export { };