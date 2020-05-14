const { ListNode } = require("./listNode");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * Runtime: 92 ms, faster than 99.71% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 38.4 MB, less than 62.50% of JavaScript online submissions for Add Two Numbers.
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let listNode = head;
  let node1 = l1;
  let node2 = l2;
  let carry = false;
  while (true) {
    let num = 0;
    if (node1) {
      num += node1.val;
      node1 = node1.next;
    }
    if (node2) {
      num += node2.val;
      node2 = node2.next;
    }
    if (carry) {
      num += 1;
    }
    if (num >= 10) {
      carry = true;
      num -= 10;
    } else {
      carry = false;
    }
    listNode.val = num;
    const anotherNumber = node1 != null || node2 != null || carry;
    if (anotherNumber) {
      listNode.next = new ListNode();
      listNode = listNode.next;
    } else {
      break;
    }
  }
  return head;
};

module.exports = {
  addTwoNumbers,
};
