// Definition for singly-linked list.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function middleNode(head: ListNode | null): ListNode | null {

  let length = 0;

  let temp = head;
  while (temp != null) {
    length++;
    temp = temp.next;
  };

  let ctr = 0;
  temp = head;

  while (ctr < Math.floor(length / 2)) {
    ctr++;
    if (temp != null)
      temp = temp.next;
  };

  return temp;
};

export { };