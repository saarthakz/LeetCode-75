// Definition for singly-linked list.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function mergeTwoLists(firstList: ListNode | null, secondList: ListNode | null): ListNode | null {
  if (firstList == null) return secondList;
  if (secondList == null) return firstList;

  let startVal: number;

  if (firstList.val > secondList.val) {
    startVal = secondList.val;
    secondList = secondList.next;
  } else {
    startVal = firstList.val;
    firstList = firstList.next;
  };

  const newListHead = new ListNode(startVal);
  let newList = newListHead;

  while (firstList != null && secondList != null) {
    if (firstList.val > secondList.val) {
      newList.next = new ListNode(secondList.val);
      newList = newList.next;
      secondList = secondList.next;
    } else {
      newList.next = new ListNode(firstList.val);
      newList = newList.next;
      firstList = firstList.next;
    };
  };

  if (firstList != null) {
    while (firstList != null) {
      newList.next = new ListNode(firstList.val);
      newList = newList.next;
      firstList = firstList.next;
    };
  } else if (secondList != null) {
    while (secondList != null) {
      newList.next = new ListNode(secondList.val);
      newList = newList.next;
      secondList = secondList.next;
    };
  };

  return newListHead;
};

export { };