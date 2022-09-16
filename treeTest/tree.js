'use strict';
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  ///// three methods for Depth first traversal preorder,inorder,postorder/////
  //root - left - right 
  preOrder() {
    if(this.root==null){
      return []
    }
    let result = [];
    let traverse = (node) => {

      result.push(node.value);
      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  // left - root - right 
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return result;
  }
  //left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root)
    return result;
  }

  ///////////
  isBST(node) {
	
    if (node == null)
    return true;
  
  /* False if left is > than node */
  if (node.left != null && this.maxValue(node.left)  > node.value)
    return false;	
    if (node.right != null && this.minValue(node.right) < node.value)
    return false;
  
  /* False if, recursively, the left or right is not a BST */
  if (!this.isBST(node.left) || !this.isBST(node.right))
    return false;
  
  /* Passing all that, it's a BST */
  return true;
  }
  ////
  sumOdd2() {
    let sum = 0;
    let traverse = (node) => {
      if (node.value % 2 != 0) {
        sum = sum + node.value;
      }
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return sum;
  }
  sumAll() {
    let sum = 0;
    let traverse = (node) => {
      sum = sum + node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return sum;
  }
  /////
  sumLeave(root) {
    if(!root){
      return 0
    }
    let sum = 0;
    let traverse = (node) => {
      if (node.left == null && node.right == null)
      sum = sum + node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return sum;
  }
  ////////////////
   isSameTree (p, q) {
    if (p==null && q==null) {
      return true;
    }
    if ((p==null && q!==null) || (p!==null && q==null) || (p.value !== q.value)) return false;
    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);

  };
////find Min/////
  findMin(root){
    if (!root) {
      return "null";
    }
    let min=root.value;
    let minl=this.findMin(root.left)
    let minr=this.findMin(root.right)
    if(minl<min)min=minl
    if(minr<min)min=minr
return min
  }
  /////find max/////
  findMax(root){
    if (!root) {
      return "null";
    }
    let max=root.value;
    let maxl=this.findMax(root.left)
    let maxr=this.findMax(root.right)
    if(maxl>max)max=maxl
    if(maxr>max)max=maxr
return max
  }
  /////////////
  maxDepth(root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }
  //////////////
  minDepth(root) {
    if(root==null)return 0;
    let queue=[];
    let current=this.root
    queue.push(current)
    let minDepth=1;
    while(queue.length){
      let levelSize=queue.length
      while(levelSize){
        current=queue.shift();
        if(current.left==null&&current.right==null){
          return minDepth
        }
        else{if(current.left)queue.push(current.left)
        if(current.right)queue.push(current.right)
        levelSize--;
      }
      minDepth++
    }
return minDepth
    }

  }
  /////////////////
  hasPath(tree, sum) {
    if (!this.tree ) {
      return false;
    }
    let current = tree.root
    if (current.value == sum && current.left == null && current.right == null) {
      return true;
    }
    let remainingTarget = sum - current.value;
    let left = this.hasPath(current.left, remainingTarget);
    let right = this.hasPath(current.right, remainingTarget)
    return left || right;
  }
  ///////
  insert(value) {
    const q = [];
    let newNode=new Node(value)
    if (this.root === null) {
      this.root = newNode;
    }
    else {
      q.push(this.root);
      while (q.length !== 0) {
        const current = q.shift();
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        else {
          q.push(current.left);
        }
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        else {
          q.push(current.right);
        }
      }
    }
  }
  ////////////
  checkFiles() {
    let count = 0;
    let traverse = (node) => {
      if (node.left) {
        console.log(node.left.value);
        if (node.left.value.includes('.')) {
          count++;
          // console.log("hh");
        }
        traverse(node.left);
      }
      if (node.right) {
        if (node.right.value.includes('.')) {
          count++;
          // console.log("bb");
        }
        traverse(node.right);
      }
    };
    traverse(this.root);
    return count;
  }
  /////////////
  invertTree(root) {
    let traverse = (node) => {
      if (node == null) {
        return null
      }
      traverse(node.left)
      traverse(node.right)
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

    }
    traverse(this.root)
    return root
  }
  ///////////root equal sum  left value+ right value////tree 3 nodes only 
  checkSum(root) {

    if (root.value == root.left.value + root.right.value) {
      return true
    }
    return false
  }
  ////////////////Given the root of a binary tree, return all root-to-leaf paths in any order.
 binaryTreeBath(root){
  if(!root){
    return [];
  }
  let result=[];
 let traverse=(node,path)=>{
  path+=node.value;
  if(!node.left&&!node.right){
    result.push(path);
  }
    if(node.left){
      traverse(node.left,path+'->')
    }
    if(node.right){
      traverse(node.right,path+"->")
    }
  }
  traverse(this.root,"")
  return result
 }
 ////////mirror is semetric////
  // For two trees to be mirror images,
    // the following three conditions must be true
    // 1 - Their root node's value must be same
    // 2 - left subtree of left tree and right
    // subtree of right tree have to be mirror images
    // 3 - right subtree of left tree and left subtree
    // of right tree have to be mirror images
 isSemetric(root){
  let result=true;
  let traverse=(node1,node2)=>{
    // if both trees are empty,
    // then they are mirror image
    if(!node1&&!node2)
    {
      return 
    }
    if(!node1|| !node2|| node1.value!==node2.value){
      result=false;
      return
    }
    traverse(node1.left,node2.right)
    traverse(node1.right,node2.left)
  }
  traverse(root,root)
  return result
 }
 mergeTrees(t1,t2){
    if(!t1)return t2;
    if(!t2)return t1;
    t1.value+=t2.value;
    //both of trees are not null,
  //we sum the value, and transform t1,
  //we can also choose t2, and return t2 at the end
    
  //recursively traverse left path  
  t1.left = this.mergeTrees(t1.left, t2.left)
  //recursively traverse right path
  t1.right = this.mergeTrees(t1.right, t2.right)
  
  //return merged tree
  return t1
  
}


}
module.exports = BinaryTree;


let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;
let Tree2= new BinaryTree(one)


///////////////////
// Tree1 = new BinaryTree(four)
// Tree2 = new BinaryTree(four)
///////////////

// const binarySearchTree = new BinarySearchTree();
// // let binarySearchTree = new BinarySerachTree(10);
////is same two trees//

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

// let Tree1= new BinaryTree(a)

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
let i = new Node(9);
a.left = b;
a.right = c;
b.left = f;
f.right = g;
g.left = h;
g.right = i;
c.left = d;
c.right = e;
let Tree1= new BinaryTree(a)
// let Tree2= new BinaryTree(a)

//  console.log(Tree2.isSameTree(Tree1,Tree2));

///////////max/////
// // console.log(tree.maxValue());

 ////min value
// console.log(Tree1.minValue(one));


// binarySearchTree.add(4); 
// binarySearchTree.add(9); 
// binarySearchTree.add(5);
// binarySearchTree.add(2);
// binarySearchTree.add(8);
// binarySearchTree.add(12);
// console.log(binarySearchTree.contains(15))
// console.log(binarySearchTree.contains(4));

//////// check sum ///////
// console.log(Tree1.checkSum(one));

////////isSemetric
// let a = new Node(1);
// let b = new Node(2);
// let c = new Node(2);
// let d = new Node(3);
// let e = new Node(4);
// let f = new Node(4);
// let g = new Node(3);
// a.left = b;
// a.right = c;
// b.left = d;
// b.righr=e;
// c.left = f;
// c.right = g;
//let Tree1= new BinaryTree(a)

// console.log(Tree1.isSemetric(a,a))

///////minDepth////
// console.log(Tree1.minDepth(one));

/////////maxdepth///
// console.log(Tree1.maxDepth(one));

///////haspath////
// console.log(Tree1.hasPath(one, 8));


//merge/

//  console.log(Tree1.mergeTrees(Tree1,Tree2));
 


/////return all root-to-leaf paths
// console.log(Tree1.binaryTreeBath(Tree1));

///////   inverst test   ////////
// console.log("preorder", Tree1.preOrder());
// console.log("preorder", Tree1.sumLeave(a));

/////find max .  min/////
console.log( Tree1.findMin(a))
console.log( Tree1.findMax(a))

// Tree1.invertTree(one);
// console.log("preorder", Tree1.preOrder());

////////////////isBst//////

// let four = new Node(4);
// let two = new Node(2);
// let five = new Node(5);
// let one = new Node(1);
// let three = new Node(3);
// four.left = two;
// four.right = five;
// two.left = one;
// two.right = three;
// let Tree1 = new BinaryTree(four)

//  console.log(Tree1.isBST(four));




// console.log("preorder", Tree2.preOrder());
// console.log(Tree1.isSameTree(Tree1,Tree2));

// console.log("inorder", tree.inOrder());
// console.log("postorder", tree.postOrder());
// // binarySearchTree.preOrder()