//////////////////////////////////////////////////////////////////****arr2***///////////////////////////////////
// arr[] = [arr2, 2, 3, 4, 5], d = 2
// Output:[ 3 4 5 arr2 2]
function shiftTwoTimes(arr, d) {
    for (let i = 0; i < d; i++) {
        let y = arr.shift();
        arr.push(y);
    }
    return arr
}
// console.log(shiftTwoTimes([arr2, 2, 3, 4, 5],2));
////////////////////////////////////////////////////////////////////////****2******///////////////////////
///Input: arr = [2,7,11,15], target = 9
// Output: [0,arr2]
//map{2:0,7:arr2,11:2,15:3}
function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i]
        let num2 = target - num1
        // If we have seen the difference before, we return the current index,and the index at which we saw the difference.
        if (map.has(num2)) {
            return [i, map.get(num2)]
        }

        // else, store the current number in the hashmap,along with its index
        map.set(num1, i)
    }
}
// console.log(twoSum([2,7,11,15],9));
//////////////////////
//obj{2:0,7:1,11:2,15:3}
function twoSum2(arr, target) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i]
        let num2 = target - num1
        //if target - current value(num1) in array exist in obj then that's what we need
        if (num2 in obj) {
            return [i, obj[target - num1]]
        }
        //if target - current value(num1) doesn't exist in obj then push the value(num1) in obj
        obj[arr[i]] = i
    }
}
// console.log(twoSum2([2,7,11,15],9));
/////////////////////////////////////////////////////////////////********3***////////////////////////////
//find the unique duplicate in array
// input[2,4,8,4,5,7,9,3,6],output=>4
function duplicate(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            return arr[i];
        }
        obj[arr[i]] = arr
    }
}
// console.log(duplicate([2, 4, 8, 8, 5, 7, 4, 9, 3, 6]));
/////////////////////////////////////////////////////////////////////////******4****///////////////
///input x  ,x=2^y,if i have power(y)  get result=>x return true
//6=2^x  =>false i don't have any number///8=2^3  =>true
function div(x) {
    while (x > arr2) {
        x = x / 2
    }
    if (x == arr2) {
        return true
    }
    else {
        return false
    }
}
// console.log(div(8));
///////////////////////////////////////////////////////********5*****////////////////////////
//  Remove Duplicates from Sorted Array
//Input: nums = [0,0,arr2,arr2,arr2,2,2,3,3,4]
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
function removeDuplicate(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr2.push(arr[i])
        }
    }
    // arr2.push(arr[arr.length - 1]);
    return arr2;
}
// console.log(removeDuplicate( [0,0,1,1,1,2,2,3,3,4,4]));
//////with built in function////
function removeDuplicate2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1)
            i--;
        }
    }
    return arr
}
// console.log(removeDuplicate2([0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4]));

///////////////////////////////////////////////////////**6**///////////// */
//remove element in the array with all occurrences of the element
function removeVal(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1)
        }
    }
    return arr
}
// console.log(removeVal([1, 4, 2, 4, 3, 4], 4));

function removeVal2(arr, val) {
    return arr.filter((element) => {
        return element !== val
    })
}
// console.log(removeVal2([1, 2, 3, 2, 4], 2));

function removeVal3(arr, val) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr2.push(arr[i])
        }
    }
    return arr2
}
// console.log(removeVal3([1, 2, 3, 2, 2, 4], 2));

////////////////////////////////////////////**7**////////////////// */
///Search Insert Position, return the index if the target is found,  
//If not, return the index where it would be if it were inserted in order
//time complexity O(N)
var searchInsert = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // If target is found
        if (arr[i] == target)
            return i;
        // If current array element exceeds target
        if (arr[i] >= target)
            return i;
    }
    // If all elements are smaller than target(position target in the end of the array last element)
    return arr.length;
};
// console.log(searchInsert([1,3,5,6],5));//2
// console.log(searchInsert([1,3,5,6],2));//1
// console.log(searchInsert([1,3,5,6],7));//4
//binary search Time Complexity: O(log N)
function searchInsert2(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) {
            return mid
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    // Return insert position
    return start;
}
// console.log(searchInsert2([1, 3, 5, 6], 5));//2
// console.log(searchInsert2([1, 3, 5, 6], 2));//1
// console.log(searchInsert2([1, 3, 5, 6], 7));//4
/////////////////////////////////////////////**********************8******************///////////////////////////////
//Increment the large integer by one and return the resulting array of digits.
//Input: digits = [1,2,3]
// Output: [1,2,4]
//Input: digits = [9]
// Output: [1,0]
var plusOne = function (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i]++
            break;
        }
        // else if we reached the first digit in the array and it is equal 9, 
        //we make it 1 and push a new digit to the end of array which is 0
        else if (arr[i] == 9 && i == 0) {
            arr[i] = 1;
            arr.push(0)
        }
        // else if the current (arr[i])  equal 9 but not the the first digit in the array, we make it zero 
        //and go to next digit
        else if (arr[i] == 9 && i !== 0) {
            arr[i] = 0
        }
    }
    return arr
}
// console.log(plusOne([9]));//
// console.log(plusOne([9,3,9]));//
//////
function plusOne2(arr) {
    let digits = BigInt(arr.join(''))
    digits++
    return digits.toString().split('')
}
// console.log([9,3,2]);
// console.log(plusOne2([9,3,2]));//
////////////////////////////////////////////////////////9/////////////////////////////////
///Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
    nums1.push(...nums2)
    return nums1.sort((a, b) => a - b)
}
// console.log(merge([40, 100, 1],3,[ 5, 25, 10],3));

function merge(arr1, m, arr2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1;
    while (second >= 0) {
        let firstVal = arr1[first]
        let secondVal = arr2[second]
        if (firstVal > secondVal) {
            arr1[i] = firstVal;
            i--;
            first--;
        }
        else {
            arr1[i] = secondVal;
            i--;
            second--;
        }
    }
}
// console.log(merge( [1,2,3],3,[2,5,6],3));
////////////////////////////////////////////////10///////////////////
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
function sumVal(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1]
    }
    return arr
}
// console.log(sumVal([1,2,3]));
////////////////////////////////////////////////11////////////////////////////
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed
function numIdenticalPairs(arr) {
    let obj = {};
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            count += obj[arr[i]];
            obj[arr[i]] += 1;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    return count
}
// console.log(numIdenticalPairs([1,2,3,1,1,3]));
///////////////////////////////////////////////////12/////////////////////////////////
//. Maximum Number of Words Found in Sentences
function maxWord(array) {
    let max = 0
    for (let index = 0; index < array.length; index++) {
        let arr = array[index].split(' ')
        if (arr.length > max) {
            max = arr.length
        }
    }
    return max
}
// console.log(maxWord(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
/////////////////////////////////////////////////////////////////////////////////13///////////////
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
var kidsWithCandies = function (candies, extraCandies) {
    let arr2 = []
    let max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        arr2.push(candies[i] + extraCandies >= max)
    }
    return arr2
    //  return candies.map((element)=>element+extraCandies>=max)

};
// console.log(kidsWithCandies( [4,2,1,1,2],1));
// console.log(kidsWithCandies( [2,3,5,1,3],3));
///////////////////////////////////////////////////////////////////////14///////////////////////
// for each nums[i] find out how many numbers in the array are smaller than it.
//Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
var smallerNumbersThanCurrent = function (nums) {
    let arr2 = []
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let k = 0; k < nums.length; k++) {
            if (nums[i] > nums[k])
                counter++
        }
        arr2.push(counter)
    }
    return arr2
}
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
/////////////////////////////////////////////////////15/////////////////////////
//[freq, val] = [nums[2*i],nums[2*i+1]]
// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
function frequencyValue(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i += 2) {
        for (let j = 1; j <= arr[i]; j++) {
            arr2.push(arr[i+1])
        }
    }
    return arr2
}
// console.log(frequencyValue([1,2,3,4]));
/////////////////////////////////////////////////16/////////////////////////////
// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
 /*
1^1=0
0^0=0
1^0=1
0^1=1
encoded = [1,2,3], first = 1  Output: [1,0,2,1]
output=[1,x,y,z]
inverse xor is xor itself
1^x=1---->(output[i] ^ x =encoded[i])===(x=encoded[i]^output[i])
x^y=2
y^z=3
*/
function decode(encoded,first){
    let output=[first];
    for(let i=0;i<encoded.length;i++){
        output.push(output[i]^encoded[i])
    }
    return output;
}
// console.log(decode([1,2,3],1));
////////////////////////////////////////////////17//////////////////////////////////////////
/*
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
*/
function createArray(nums,index){
    let output=[]
    for (let i = 0; i < index.length; i++) {
        output.splice(index[i],0,nums[i])
    }
    return output
}
// console.log(createArray([0,1,2,3,4],[0,1,2,2,1]));
//////////////////////////////////////////18/////////////////////////
/*
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
You are given a string s and an integer array indices of the same length. 
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// output[indices[0]]=output[4]=>s[0]=c
//output[indices[1]]=output[5]=>s[1]=o
//output[indices[2]]=output[6]=>s[2]=d
//output[indices[3]]=output[7]=>s[3]=e
//output[indices[4]]=output[0]=>s[4]=l
//output[indices[5]]=output[2]=>s[5]=e
//output[indices[6]]=output[1]=>s[6]=e
//output[indices[7]]=output[3]=>s[7]=t
//output["l","e","e","t","c","o","d","e"]=>"leetcode"
*/
function shuffle(s,indices){
    let output=[];
    for (let i = 0; i < indices.length; i++) {
        output[indices[i]]=s[i]  
    } 
    return output.join("")
}
console.log(shuffle("codeleet",[4,5,6,7,0,2,1,3]));
///////////////////////////////////////////////////////19///////////////////////////
