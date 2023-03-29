
//Maximum Number of Words Found in Sentences
var mostWordsFound = function(sentences) {
   let max=0;
    let array=[]
    for(let i=0;i<sentences.length;i++){
        array=sentences[i].split(" ")
        if(array.length>max)
            {
                max=array.length
            }
    }
    return max
};
///////////////Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
var buildArray = function(nums) {
    let res=[]
    for(let i=0;i<nums.length;i++){
        res[i]=nums[nums[i]]
        
    }
    return res
};
// Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
           if(nums[i] === nums[i+1])
           {
               nums.splice(i+1, 1); 
               i--;
           }
       }
       return nums.length
   };
   ///Remove Element
   var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
           nums.splice(i,1)
           
           }
    }
    return nums.length
};
//////////////////Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.  
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
   
        if(nums[i]==target)
            {
                
                return i
            }
        else
            if(target<nums[i])
                return i-1
        else
            if(target>nums[nums.length-1])
                return i+1
        else if (target < nums[0]) {
        return 0;
        }
       
    }
};
//Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
var plusOne = function(digits) {
    
    let join = parseInt(digits.join(''));
    join++
    return join.toString().split("");
    
};
///
//////////////////////*********************////////////////// */
// peak element
const peak = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i - 1;
        } else {
            return 0;
        }
    }
}

// max_min element
const max_min = (arr) => {
    let max = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i];
        }
    return min + ' ' + max;
}

//reverse array
const reverse = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

//sort array
const sortArr = (arr) => {
    return arr.sort((a, b) => a - b);
}

//Kth smallest element
const smallest = (arr, k) => {
    arr.sort((a, b) => a - b)
    console.log(arr);
    return arr[k - 1];
}

//find frqquency
const frqquency = (arr, x) => {
    let freq = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            freq++;
        }
    }
    return freq
}

const removeDublicate = (arr) => {
    let newArr = arr.filter((arr, i) => {
        arr[i] === lastIndexOf(arr[i])
    })
    console.log(newArr)
}

const reversenumberwithstring = (num) => {
    let str = num.toString()
    let x = str.split('');
    let newarr = [];
    for (let i = x.length - 1; i >= 0; i--) {
        newarr.push(x[i])
    }
    console.log(newarr.join(''));
}

function reversedString(str) {
    let arr = str.split('.');
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result.join('.');
}

const xxx = (arr) => {
    let y = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length - 1 == i) {
            y.push(arr[i])
        }
        if (arr[i] > arr[i + 1]) {
            y.push(arr[i])
        }
    }
    console.log(y);
}

const reversenumberwithoutstring = (num) => {
    let reverse = 0
    while (num > 1) {
        reverse = Math.floor(reverse * 10 + (num % 10));
        num /= 10
    }
    return reverse;
}

function swip(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return {'x': x, 'y': y}
}

const findRepeated = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) !== index)
}

const indexOfFirstRepeat = (arr) => {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]); //from w ww.ja va 2s. c o m
        } else {
            return arr[i]
        }
    }
}

const missing = (min, max) => {
    let newArr = []
    for (let i = min + 1; i < max; i++) {
        newArr.push(i)
    }
    return newArr;
}

const timesOfRepeatedStr = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] in obj) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj
}

function isArmstrongNum(armestrongNum) {
    let n = armestrongNum
        .toString()
        .split('');
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        result += Math.pow(n[i], n.length)
        // result+=n[i]**n.length;
        console.log(result, n.length)
    }
    if (result === armestrongNum) 
        return true;
    else 
        return false;
    }

const getSameLetters = (a, b) => {
    const minLength = Math.min(a.length, b.length);
    const sameLetters = []
    for (let i = 0; i < minLength; i++) {
        if (a[i] === b[i]) {
            sameLetters.push({i, letter: a[i]})
        }
    }
    return sameLetters
}

const numberOfletterBetweenStartAndEnd = (str) => {
    let l = str.length - 2
    console.log(l)
    return `${str[0]}${l}${str[str.length - 1]}`
}

function isPrime(num) {
    let prime = []
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

function findUnique(str) {
    let uniq = "";
    for (let i = 0; i < str.length; i++) {
        if (uniq.includes(str[i]) === false) {
            uniq += str[i]
        }
    }
    return uniq;
}

function charCount(s, c) {
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) 
            res++;
        }
    return res;
}



function checkSequence(a,b){
    if (b.length == 0)
        return true;
     
    // If length of a = 0
    // that means b is not present in
    // a so we return false
    if (a.length == 0)
        return false;
     
    if (a[0] == b[0])
        return checkSequence(a.substring(1),b.substring(1));
    else
        return checkSequence(a.substring(1), b);
}
//////////////////////
function makeZigZagArray(arr) {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if ((i % 2 === 0 && arr[i] > arr[i - 1]) || (i % 2 !== 0 && arr[i] < arr[i - 1])) {
      // element does not follow zig-zag pattern, replace it with appropriate value
    //   arr[i] = arr[i - 1] * -1;
      count++;
    }
  }

  return count;
}
const arr = [1, 2, 3, 4, 5];
const numReplacements = makeZigZagArray(arr);
console.log(arr); // Output: [1, -2, 3, -4, 5]
console.log(numReplacements); // Output: 2