'use strict';
const BinaryTree = require('./tree');
const Node = require('./tree');

class BinarySearchTree extends BinaryTree {


    add(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while (current) {
                // if (value === current.value) return undefined;
                // if the new value is less than this currentvalue, go left
                if (value < current.value) {

                    // if there is no left, then the new node belongs there
                    if (current.left === null) {
                        current.left = newNode;

                    } else {
                        current = current.left;
                    }

                    // if the new value is greater than this current value, go right
                } else if (value > current.value) {

                    // if there is no right, then the new node belongs there
                    if (current.right === null) {
                        current.right = newNode;

                    } else {
                        current = current.right;
                    }

                }
            }
        }
    }
  

    contains(value) {
        if (this.root == null)
            return "Empty tree!";
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    // Contains(value) {
    //     if (!this.root.value) {
    //         return false
    //     }
    //     let search = (result) => {
    //         if (result.value == value) {
    //             return true
    //         } else if (result.value > value) {
    //             if (!result.left) {
    //                 return false;
    //             }
    //             return search(result.left)
    //         }
    //         else {
    //             if (!result.right) {
    //                 return false;
    //             }
    //             return search(result.right);
    //         }

    //     }
    //     return search(this.root)
    // }

}
module.exports = BinarySearchTree;