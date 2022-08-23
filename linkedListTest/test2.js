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

    //remove head
    removeHead() {
        this.head = this.head.next;
        return this;
    }
    //remove  all occurrence of  values
    removeNodeoccurrences(value) {
        let current = this.head;
        let prev = this.head;
        if (this.head.value == value) {
            this.head = this.head.next;
        }
        while (current) {
            if (current.value !== value) {
                prev = current;
                current = current.next;
            }
            else
                current = current.next;
                prev.next = current
        }
        return this
    }

    //remove node by given index
    removeNodeInd(index) {
        let current = this.head;
        let prev = this.head;
        let counter = 0;
        if (index == 0) {
            this.head = this.head.next;
            return this
        }
        else
            if (index >= this.size) {
                return this
            }
        while (current) {
            if (counter !== index) {
                counter++
                prev = current;
                current = current.next;
               
            }
            else
               { current = current.next;
                prev.next = current
                return this
               }
        }
    }
    //get node by index
    getValue(indx) {
        let current = this.head;
        let counter = 0;
        while (current) {
            if (counter == indx) {
                return current.value
            }
            else
                counter++;
                current = current.next;
        }
    }
    //get index of value
    getIndex(value) {
        let current = this.head;
        let counter = 0;

        while (current) {
            if (current.value == value) {
                return counter;
            }
            counter++;
            current = current.next;
        }
    }
    //group all odd nodes together followed by the even nodes.
    //the node number and not the value in the nodes.
    oddEvenList() {
        if (this.head != null) {

            let odd = this.head;
            let even = this.head.next;
            let evenHead = even;

            while (even != null && even.next != null) {
                odd.next = odd.next.next;
                odd = odd.next;
                even.next = even.next.next;
                even = even.next;
            }
            //merge odd and even 
            odd.next = evenHead;
        }
        return this;
    }
    /////mergepoint between two linked list/////
    mergePoint(l1, l2) {
        let current1 = l1.head;
        let current2 = l2.head;
        let array = [];
        while (current1 != null) {
            array.push(current1.value)
            current1 = current1.next;
        }
        while (current2 != null) {
            if (array.includes(current2.value)) 
            { return current2.value }
            else 
            current2 = current2.next;
        }
    }
    //mergepoint
    // mergeNode2(l1, l2) {
    //     let length1 = 0;
    //     let length2 = 0;
    //     let current1 = l1.head;
    //     let current2 = l2.head;
    //     while (current1 !== null) {
    //         length1++;
    //         current1 = current1.next
    //     }
    //     while (current2 !== null) {
    //         length2++;
    //         current2 = current2.next
    //     }
    //     let different = 0;
    //     if (length1 > length2) {
    //         different = length1 - length2
    //     }
    //     else {
    //         different = length2 - length1
    //     }
    //     current1 = l1.head;
    //     current2 = l2.head;
    //     if (length1 > length2) {
    //         while (different > 0) {
    //             current1 = current1.next;
    //             different--;
    //         }
    //     }
    //     else {
    //         while (different > 0) {
    //             current2 = current2.next;
    //             different--;
    //         }
    //     }
    //     while (current1 !== null && current2 !== null) {

    //         if (current1.value == current2.value) {
    //             return current1.value
    //         }
    //         else{

    //             current1 = current1.next;
    //             current2 = current2.next;
    //         }
    //     }
    //     return 0

    // }

    //return true if found the value 
    includes(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
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
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.size++
            return this;
        }
    }
    ///print the list as string
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



l1.append(5);
l1.append(11);
l1.append(5);
l1.append(7);
l1.append(5);

l2.append(4);
l2.append(6);
l2.append(7);
l2.append(17);
// l2.append(4);
// l2.append(5);
// l2.append(6);


console.log(l1.tostring());
// console.log(l2.tostring());
// console.log((l1.removeHead()).tostring());

// console.log((l1.removeNodeInd(4)).tostring());
// console.log((l1.removeNodeoccurrences(5)).tostring());
// console.log(l1.includes(5));
// console.log(l1.mergePoint(l1, l2));
// console.log((l1.oddEvenList()).tostring());
// console.log(l1.getValue(5));
// console.log(l1.getIndex(1));

