'use strict';
class Node {
   constructor(value) {
     this.value = value;
     this.children = [];
   }
 } 
 class KaryTree {
   constructor(root=null) {
     this.root = root;
   
   }
 

 fizzBuzz(tree) {
   if (tree.root == null)
      return "Empty tree!";

      let visited = [];
  let fizz=(currentNode)=>{
      
      if (currentNode.value % 5 === 0 && currentNode.value % 3 == 0) {
         currentNode.value = 'FizzBuzz';
          visited.push(currentNode.value);
      }

      else if (currentNode.value % 3 == 0) {
         currentNode.value = 'Fizz';
          visited.push(currentNode.value);

      }

      else if (currentNode.value % 5 == 0) {
         currentNode.value = 'Buzz';
          visited.push(currentNode.value);
      }

      else {
         currentNode.value = currentNode.value.toString();
       visited.push(currentNode.value);
      }
        //  for(let child of currentNode.children){
        //     temp.push(child); 
        // } 
        if(currentNode.left)fizz(currentNode.left)
        if(currentNode.right)fizz(currentNode.right)
   };
  
    //return tree.root;
    fizz(tree.root)
    return visited;
}

 breadthFirst(tree) {
  if (tree.root == null)
  return "Empty tree!";
  let visited = [];
  let queue = [];
  let currentNode = tree.root;
  queue.push(currentNode);
  while (queue.length > 0) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      
  };
  return visited;
}











 }

 


let one = new Node(1);
let two = new Node(15);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
let tree = new KaryTree(one);
 console.log(tree.root.children[0])
 console.log(tree.fizzBuzz(tree))


