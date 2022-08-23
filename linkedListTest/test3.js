'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /////middle node 
    middleNode() {
        let current = this.head;
        let middle = Math.floor(this.size / 2);
        let counter = 0;
        current = this.head;
        while (current) {
            if (counter == middle) {
                return current.value;
            }
            counter++;
            current = current.next;
            
        }
    }
    ///delete middle
    deleteMiddle() {
        let mid = Math.floor(this.size / 2);
        let current = this.head;
        let count = 0;
        while (current) {
            if (mid === count) {
                current.value = current.next.value;
                current.next = current.next.next;
            }
            count++;
            current = current.next;
           
        }
        return this
    }
        //remove one of duplicate 
        removeDuplicate() {

            if (this.head) {
                let current = this.head;
        while (current.next != null) {
            if (current.value == current.next.value)
                current.next = current.next.next;
            else
                current = current.next;
        }
    }
        return this;
    }
    //remove two duplicate
    removeDuplicate2() {

        let current = this.head;
        let prev = this.head;
        // remove first and secod node
        if (this.head.value == this.head.next.value) {
            this.head = current.next.next;

        }
        while (current.next != null) {
            if (current.next == null) {
                break;
            }
            if (current.value == current.next.value)
                prev.next = current.next.next;
            else
                prev = current;
            current = current.next;
        }
        return this;
    }

    ////compare two linkedlist
    compare(list1, list2) {
        let current1 = list1.head;
        let current2 = list2.head;

        while (current1.next !== null && current2.next !== null) {
            if (current1.value == current2.value) {

                current1 = current1.next;
                current2 = current2.next;
            }
            else return false
        }
        if (current1.next == null && current2.next == null && current1.value==current2.value) 
         {
                return true;
            
         }else
          return false;
        
    }
        //////sum all node///
        sum(list) {
            let current = list.head;
            let sum = 0;
            while (current) {
                sum += current.value;
                current = current.next;
            }
            return sum;
        }
        ////sum even node//
        sumEven(list) {
            let current = list.head;
            let sum = 0;
            while (current) {
                if (current.value % 2 == 0) {
                    sum += current.value
                }
                current = current.next;
            }
            return sum;
        }
        ///max////
        maxNode(list) {
            let current = list.head;
            let max = 0;
            while (current) {
                if (current.value > max) {
                    max = current.value
                }
                current = current.next;
            }
            return max;
        }
        ///reverse linked list///
        reverse(list) {
            let current = list.head;
            let prev = null;
            let next = null;
            if (this.head) {
                //only one node
                if (!this.head.next) { return this; }
                while (current) {
                    next = current.next;//store next node of current before change
                    current.next = prev;//change next of current by reverse the link
                    prev = current;//move prev node forward
                    current = next;//move current node forward
                }
                list.head = prev
                return list
            }
            return "is empty"
        }
        ///insert at the front
        insert(value) {
            const newNode = new Node(value);

            if (!this.head) {
                this.head = newNode;
                return this;
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
                return this;
            }
        }
        /// Add a node at the end
        append(value) {
            const newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
                this.size++;
                return this;
            }
            else {
                let currentNode = this.head;
                while (currentNode.next!==null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;
                this.size++
                return this;
            }

        }

        //print linked list as string///
        tostring() {
            let currentNode = this.head;
            let str = "";
            while (currentNode) {
                str += `{${currentNode.value}}->`;
                currentNode = currentNode.next;
            }
            return str + "NULL";
        }

    }
module.exports = LinkedList;

const l1 = new LinkedList();
const l2 = new LinkedList();
// const l3 = new LinkedList();


l1.append(1);
l1.append(2);
l1.append(113);
// l1.append(10);
// l1.append(3);
// l1.append(1);
// l1.append(999);
// l1.append(9999);


l2.append(1);
l2.append(2);
l2.append(13);
// l2.append(10);
console.log(l1.tostring());
//console.log(l2.tostring());



// console.log(l1.sum(l2));
// console.log(l1.maxNode(l1));
// console.log(l1.sumEven(l1));

// console.log((l1.reverse(l1)).tostring());
console.log(l1.compare(l1, l2));
//  console.log(l1.middleNode());
// console.log(l1.removeDuplicate());
// console.log((l1.removeDuplicate()).tostring());
// console.log((l1.removeDuplicate2()).tostring());

// console.log((l1.deleteMiddle()).tostring());

// l1.deleteMiddle()
// console.log(l1.tostring());


