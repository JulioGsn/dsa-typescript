/*
export class Nody {
    value: any;
    next: Nody | null;

    constructor(value: any, next: Nody | null) {
        this.value = value;
        this.next = next;
    }
} 
*/

type Node = {
    value: any;
    next: Node | null;
}

export class LinkedList {
    head: Node;

    constructor(head: Node) {
        this.head = head;
    }

    insertAtStart(node: Node) {
        const oldHead = this.head;
        node.next = oldHead;
        this.head = node;
    }

    insertAtEnd(node: Node) {
        if(this.head === null || node === null) {
            return false;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
       }
       current.next = node;
    }

    findNodeByValue(value: any) {
        let current = this.head;
        while(current.next !== null) {
            if(current.value == value) {
                return current;
            }
            current = current.next;
        }
    }
}
