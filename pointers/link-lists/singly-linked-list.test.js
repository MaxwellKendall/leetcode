import { LinkedList } from './singly-linked-list';

describe('singly linked list operations', () => {
  test('reverse', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    list.reverse();

    const reversedArray = [];
    let current = list.head;
    while (current !== null) {
      reversedArray.push(current.value);
      current = current.next;
    }

    expect(reversedArray).toEqual([3, 2, 1]);
  });
  test('remove', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    list.remove(2);

    const remainingValues = [];
    let current = list.head;
    while (current !== null) {
      remainingValues.push(current.value);
      current = current.next;
    }

    expect(remainingValues).toEqual([1, 3]);
  });
  test.skip('insert (todo)');
});
