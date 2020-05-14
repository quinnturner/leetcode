const { addTwoNumbers } = require('./add-two-numbers');
const { ListNode } = require('./listNode');



describe('add-two-numbers', () => {
    it('passes (2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));
        const result = addTwoNumbers(l1, l2);
        expect(result.val).toStrictEqual(7);
        expect(result.next.val).toStrictEqual(0);
        expect(result.next.next.val).toStrictEqual(8);
        expect(result.next.next.next).toBeNull();
    })
})