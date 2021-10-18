/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    var newHead = new ListNode(0, head), prev = newHead, next;
    while (head && head.next) {
        prev.next = head.next;
        next = head.next;
        head.next = next.next;
        next.next = head;
        prev = head;
        head = head.next;
    }
    return newHead.next;
};