/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var listSize = function (head) {
    var size = 0;
    while (head) {
        head = head.next;
        size++;
    }
    return size;
}
var reverseList = function (head, k) {
    var oldHead = head, current = head, next, prev = null;
    while (current && k > 0) {
        k--;
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    oldHead.next = next;
    return [prev, oldHead];
};
var reverseKGroup = function (head, k) {
    var size = listSize(head);
    var newHead = new ListNode(0), prev = newHead;
    while (size >= k) {
        size -= k;
        var [first, last] = reverseList(head, k);
        prev.next = first;
        head = last.next;
        prev = last;
    }
    return newHead.next;
};