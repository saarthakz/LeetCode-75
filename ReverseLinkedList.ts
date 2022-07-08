
//  * Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}


function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) return null;

  let current = head;
  let next = current.next;
  current.next = null;

  while (next != null) {
    const nextToNext = next.next;
    next.next = current;
    current = next;
    next = nextToNext;
  };

  return current;
};

export { };