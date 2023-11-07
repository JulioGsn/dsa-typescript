import { LinkedList } from '../ds/index';

test('Test should insert at the start of the list', () => {
    const head = {value: 0, next: null};
    const ll = new LinkedList(head);
    const node1 = {value: 1, next: null};

    ll.insertAtStart(node1);

    expect(ll.head).toBe(node1);
    expect(ll.head.next).toBe(head);
});

test('Test should insert multiple nodes at the start of the list', () => {
    const head = {value: 0, next: null};
    const ll = new LinkedList(head);
    const node1 = {value: 1, next: null};
    console.log(node1)
    const node2 = {value: 2, next: null};

    ll.insertAtStart(node1);
    ll.insertAtStart(node2);

    expect(ll.head).toBe(node2);
    expect(ll.head.next).toBe(node1);
    expect(ll.head.next?.next).toBe(head);
});

test('Test should insert at the end of the list', () => {
    const head = {value: 0, next: null};
    const ll = new LinkedList(head);
    const node1 = {value: 1, next: null};

    ll.insertAtEnd(node1);
    
    expect(ll.head.next).toBe(node1);
});

test('Test should find Node by value', () => {
    const head = {value: 0, next: null};
    const ll = new LinkedList(head);
    const node1 = {value: 1, next: null};
    const node2 = {value: 10, next: null};
    const node3 = {value: 3, next: null};

    ll.insertAtEnd(node1);
    ll.insertAtEnd(node2);
    ll.insertAtEnd(node3);

    const result = ll.findNodeByValue(10);
    
    expect(result).toBe(node2);
});
