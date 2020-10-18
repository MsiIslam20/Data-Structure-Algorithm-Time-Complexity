// A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations

// Three Types of Linked List: 

// 1) Singly Linked List
// 2) Doubly Linked List
// 3) Circular Linked List

// See The Code Example below :

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(node){
        const newNode = new Node(node);
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node("Saidul Islam");

const manobBondonList = new LinkedList(head);

manobBondonList.add("Shakil");
manobBondonList.add("Aminul");
manobBondonList.add("Maruf");

// console.log(JSON.stringify(manobBondonList));
