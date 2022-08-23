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
        this.size=0;
    }

    addTowNubers(l1, l2) {
        let newList = new LinkedList();
        let current1 = l1.head;
        let current2 = l2.head;
        let sum = 0;
        let carry = 0;
        while (current1 != null || current2 != null || sum > 0) {

            if (current1 != null) {
                sum += current1.value;
                current1 = current1.next;
            }
            if (current2 != null) {
                sum += current2.value;
                current2 = current2.next;
            }
            //If sum = 13, then we know the carry should be 1. To get the carry, we can divide the sum by 10.
            // Since we don't want a remainder, we can use Math.floor(). Math.floor(13/10) is 1,
            carry = Math.floor(sum / 10);
            //For the sum.13 % 10 gives us 3, because the remainder of 13/10 is 3.
            sum = sum % 10;
            newList.append(sum);
            //if i hade carry added to sum
            //if sum > 0, if there's a number that's being carried over, then a new node will be made.
            sum = carry;
            carry = 0;

        }
        return newList;

    }

    ////zip tow linked list
    zipList(l1, l2) {
        let zip = new LinkedList();
        let current1 = l1.head;
        let current2 = l2.head;
        
        if (current1 == null) { return l2; }
        else {
            if (current2 == null) { return l1; }
        }
        while (current1 || current2) {
            if (current1 != null) {
                zip.append(current1.value)
                current1 = current1.next;
            }
            if (current2 != null) {
                zip.append(current2.value)
                current2 = current2.next;
            }
        }
        return zip;
    }
    ////return node that index place from end of linkedlit
    kth(index){
        let current=this.head;
        let counter=0;
        let nodeIndex=this.size-index-1;
        if(index>=this.size){
            return "exception"
        }
        while(current){
            if(counter==nodeIndex){
                return current.value;
            }
            counter++;
            current=current.next;
        }
    }
    ///isPalindrom read from right to left the sam as read from left to right//
    isPalindrom()
    {
        let current1=this.head
        let current2=this.head
        let arr=[];
        let bool=true;
        while(current1){
        arr.push(current1.value)
        current1=current1.next
        }
        while(current2){
           let temp=arr.pop()
           if(temp!= current2.value){
            bool=false;
            break;
           }
           current2=current2.next
            }
         return bool   
    }
    /// Add a node at the end o linked list
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
            this.size++;
            return this;
        }

    }
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
const l3 = new LinkedList();


l1.append(3);
l1.append(1);
l1.append(9);
l1.append(10);


l2.append(9);
l2.append(5);
l2.append(7);
console.log(l1.tostring());
// console.log(l2.tostring());

// console.log((l3.addTowNubers(l1,l2)).tostring());
// console.log((l3.zipList(l1, l2)).tostring());
console.log(l1.kth(0));
// console.log(l1.isPalindrom());
