///////////////////////////////////////////////////////////////////1***///////////////////
//given an array, return an array for the elements that doesn't have greater elements in the right side of them.
//EX: [2,8,5,4] => [8,5,4]
// function elementInArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 arr.splice(i, 1);
//             }
//         }
//     }
//     return arr;
// }

// console.log(elementInArr([16, 17, 4, 3, 5, 2]));

//////////////////////////////////////////////////////////////////////2***////////////////////////////////

// const str1 = "sterile";
// const str2 = "meetinghey";
// const getSameLetters = (a, b) => {
//   const minLength = Math.min(a.length, b.length);
//   const sameLetters = []
//   for (let i = 0; i < minLength; i++) {
//     if (a[i] === b[i]) {
//       sameLetters.push({ i, letter: a[i] })
//     }
//   }
//   return sameLetters
// }
// console.log(getSameLetters(str1, str2))

/////////////////////////////////////////////////////////////////////3***//////////////////////////////////
//.input
let str = 'i.like.banana';
//output
//'banana.like.i'
function revers(str) {
    let newStr;
    let arr1 = str.split('.');//return array
    let arr2 = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        arr2.push(arr1[i])
    }
    newStr = arr2.join(".")//convert to sring
    return newStr
}
// console.log(revers('i.like.banana'));
// Reverse a sentence Input = ' I am lost'
// Output = ' lost am I ' 
function reverse(str) {
    let newArr = [];
    let arr = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr.join(" ")
    //    return str.split(" ").reverse().join(" ");
}
// console.log(reverse( ' I am lost'));

////////////////////////////////////////////////////////4***////////////////////////////
//input 
let n = "123456"
//output
//615243
function rearrange(str) {
    let newStr = "";
    let arr = str.split('');//return array
    while (arr.length > 0) {
        let shift1 = arr.shift();//delete  first
        let pop1 = arr.pop();//delete last
        newStr += pop1 + shift1;
    }
    return newStr
}
// console.log(rearrange("123456"));

/////////////////////////////////////////////////////////5***///////////////////////////
// input
let arr = [1, 2, 3];
//output
//[1,2,3,1,2,3]
function duplicate(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        arr.push(arr[i])
    }
    return arr;
}
// console.log(duplicate(arr));

//////////////////////////////////////////////////////////////////////////////6***//////////////////////////
//input
let x = 5;
let y = 7;
//output
//x = 7;
//y = 5;
function reverseVariable(x, y) {
    let z = x;
    x = y;
    y = z;
    return { x, y };
}
// console.log(reverseVariable(x,y));
function swip(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return { x, y }
}
///////////////////////////////////////////////////////////////////7***/////////////////////////////////
//input
let num = [1, 2, 4, 3, 5, 6, 7, 8, 7, 9];
//output
//7
function repeate(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum - 45;
}
// console.log(repeate(num));
////////////////////////////////////////////////////////////*****8***//////////////////////////////////
//input
let ex = [1, 2, 3, 4, 7, 9, 5, 8, 9];
//output
//2 'index for 1st repeated num'
function idxOf1stRepeated(ex) {
    for (let i = 0; i < ex.length; i++) {
        for (let j = i + 1; j < ex.length; j++) {
            if (ex[i] === ex[j]) {
                return i;
            }
            // else continue;
        }
    }
}
//   console.log('idxOf1stRepeated : ' ,idxOf1stRepeated(ex));
//////////////////////////////////////////////////////////////////////***9***/////////////////////////////
//input
let num1 = 14;
//output
//6
// function timeOfMeasurment(num1) {
//     let count = 0;
//     while (num1 > 0) {
//         if (num1 % 2 === 0) {
//             num1 = num1 / 2;
//         }
//         else {
//             num1 = num1 - 1;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(' timeOfMeasurment : ', timeOfMeasurment(num1));

//////////////////////////////////////////////////////////////////////////***10***////////////////////////
//input
let arrF = [1, 5, 6, 7, 8, 9, 10, 12];
//output
//[1,8,5,9,6,10,7,12]
function newArrange(arrF) {
    let newArr = [];
    let middle = arrF.length / 2;
    for (let i = 0; i < arrF.length / 2; i++) {
        newArr.push(arrF[i]);
        newArr.push(arrF[middle])
        middle++;
    }
    return newArr;
}
function newArrange2(arr) {
    let newArray = [];
    let mid = Math.floor(arr.length / 2)
    for (let i = 0; i < mid; i++) {
        newArray.push(arr[i]);
        for (let j = i + mid; j < arr.length; j++) {
            newArray.push(arr[j])
            break
        }
    }
    return newArray
}
function newArrange3(arr) {
    let newArray = [];
    let mid = Math.floor(arr.length / 2)
    for (let i = 0; i < mid; i++) {
        newArray.push(arr[i]);
        newArray.push(arr[i + mid]);
    }
    return newArray
}
// console.log('newArrange : ' ,newArrange3(arrF));

////Write a function that will take in an array and index and return new shuffled array
// where the fist element will be starting from that index and the second will be the original one and so on: 
// exp: // input: [1, 2, 3, 4, 5, 6], idx = 3 // output: [4, 1, 5, 2, 6, 3] 
function shuffled(arr, index) {
    // let newArr = [];
    // let len = index;
    // for (let i = 0; i < len; i++) {
    //     newArr.push(arr[index])
    //     newArr.push(arr[i]);
    //     index++;
    // }
    // return newArr;
    let arr2 = [];
    arr2.push(arr[index]);
    for (let i = 0; i < index; i++) {
        if (arr[i]) arr2.push(arr[i]);
        if (arr[index + 1 + i]) arr2.push(arr[index + 1 + i]);
    }
    return arr2;
}
function shuffled2(arr, index) {
    let newArray = [];
    for (let i = 0; i < index; i++) {
        newArray.push(arr[i + index]);
        newArray.push(arr[i]);
    }
    return newArray
}
// console.log(shuffled2([1, 2, 3, 4, 5, 11], 3));

////////////////////////////////////////////////////////////////////////////////////***11***/////////////////
//Given an array return an array that contains the sum of all repeated numbers
// if they were next to each other if not return the same number 
Input = [2, 2, 2, 7, 3, 3, 1, 2]
//Output = [6,7,6,1,2]
// let arrayF = [1, 2, 3, 3, 5, 7, 8, 2, 2, 2, 2, 4, 8, 8, 5];
//output
//[1,2,6,5,7,8,8,4,16,5]
function sumRepeatition(arrayF) {
    let result = [];
    for (let i = 0; i < arrayF.length; i++) {
        if (arrayF[i] === arrayF[i - 1]) {
            let y = result.pop();//remove last element
            result.push(y + arrayF[i]);
        }
        else {
            result.push(arrayF[i]);
        }
    }
    return result;
}
// console.log('9. sumRepeatition : ', sumRepeatition(Input));
/////////////////////////////////////////////////////////////////////////////////**12**/////////////////////////////////
//input 
let min = 1;
let max = 5;
//output
//[2,3,4]
function missing(min, max) {
    let newArr = [];
    for (let i = min + 1; i < max; i++) {
        newArr.push(i)
    }
    return newArr
}
// console.log(missing(min,max));
//////////////////////////////////////////////////////////////////////////////////**13**//////////////////////////

// Check if the the cube of each number in a given is the same to that number 
//for example: Input = 153, 1^3 + 5^3 + 3^3 = 153 Output = true 
// find the armstrong for example: 153=1^3 + 5^3 + 3^3
///1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
///the sum of cubes of each digit is equal to the number itself
//input 
let armestrongNum = 1634;
//output
//true
function isArmstrongNum(armestrongNum) {
    ////convert number to string then split convert string in to array[ '5', '4', '3', '2', '1' ]
    let n = armestrongNum.toString().split('');
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        // result += n[i] ** n.length;
        // result += n[i] *n[i] *n[i] *n[i] ;
        result += Math.pow(Number(n[i]), n.length)
    }
    if (result === armestrongNum) return true;
    else return false;
    // return sum === num;

}
//   console.log('15. isArmstrongNum : ' ,isArmstrongNum(152));

//////////////////////////////////////////////////////////////////////////////////////**14**//////////////////////////
//Revers a number without turning the number into a string or using built-in methods.
//input 
let revNum = 1234;
//output
//4321
function reversedNum(revNum) {
    let reverse = 0;
    let lastNum;
    while (revNum != 0) {
        lastNum = revNum % 10;//remider is the last number 1234%10==>4//123%10=3
        reverse = reverse * 10 + lastNum;//0*10+4==>4//4*10+3==>43
        revNum = Math.floor(revNum / 10);//greatest integer 123/ 12 / 1 /0
    }
    return reverse;
}
// console.log('befor',revNum);
// console.log(' reversedNum : ' ,reversedNum(revNum));
////////////////////////////////////////////////////////////////////////**15**//////////////////////////////////
//input 
let numR = 8;
let root = 3;
//output
//2
function rootValue(numR, root) {
    let res = Math.pow(numR, 1 / root);
    return Math.ceil(res);//return smallest integer
}
// console.log(' rootValue : ' ,rootValue(numR, root));
///////////////////////////////////////////////////////////////////////**16**/////////////////////////
// //input 
// let day = 16;
// let month = 3;
// //output
// //7
// function getMonth(day, month) {
//     let result = day + month - (Math.floor((day + month) / 12) * 12);
//     return result;
// }
// //   console.log('14. getMonth : ' ,getMonth(day,month));

/////////////////////////////////////////////////////////**17**/////////////////////////////////////////////

//Find the count of each character in a string without using any built-in methods. 
//{s:9,w:2,a:6,n:1,e:1}
//input 
let string = 'swsssssssswaaanaeaa';
// //output
// //{s:9,w:2,a:6,n:1,e:1}
function timesOfRepeatedStr(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in obj) {
            obj[string[i]] += 1;//update value of property 
        } else {
            obj[string[i]] = 1;//create property in object with value
        }
    }
    return obj;
}
//   console.log('11. timesOfRepeatedStr : ' ,timesOfRepeatedStr(string));
/////////////////////////////////////////////////////////////**18**///////////////////////////////
///Repeated letters in a string without using built-in methods
///// Input = weeyoooz  Output = ee - 2 , o-3 
function repeated2(str) {
    let count = {}
    let text = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]] += 1;
        }
        else {
            count[str[i]] = 1;
        }
    }
    for (let key in count) {
        if (count[key] > 1) {
            text += key + "-" + count[key] + ",";
        }
    }
    return text
}
// console.log(repeated2('weeyoooz'));

////////////////////////////////// find the most repeating character in string and return it and how many was repeated.
//input =>'swsssssssswaaanaeaa'
//{s:9,w:2,a:6,n:1,e:1}
//s:9
function repeated3(str) {
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]] += 1;
        }
        else {
            count[str[i]] = 1;
        }
    }
    let max = 0
    for (let key in count) {
        if (count[key] > max) {
            max = count[key]
            text = key + ":" + max;
        }
    }
    return text
}
// console.log(repeated3('swsssssssswaaanaeaa'));

////////////////////////////////////////////////////**19**/////////////////////////////////
//2.the sum of number that falls between the smaller and the largest number in that array without using built-in methods 
//Input = [2,5,6,7,9,10,11,15] Output = 119 
function sum(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[0]) min = arr[i];
        if (max < arr[i]) max = arr[i];
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
}
//   console.log(sum([2,5,6,7,9,10,11,15]));
/////////////////////////////////////////////////////////////////////////////**20** ///////////////////////////////// 
//Find all the missing numbers between the min and the max number in this array 
//(with built in methods) array = [0, 5, 4, 9, 3]; output==>[ 1, 2, 6, 7, 8 ]
function missing(a) {
    let min = a[0];
    let max = a[0];
    let missing = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) min = a[i];
        if (a[i] > max) max = a[i];
    }
    for (let i = min; i <= max; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing
}
// console.log(missing([0, 5, 4, 9, 3]));

//(No built in methods allowed)
//Find all the missing numbers between the min and the max number in this array 
// array = [0, 5, 4, 9, 3]; output==>[ 1, 2, 6, 7, 8 ]
// function missing2(numArr){
//     let missing2 = [];
//     // let min = numArr[0];
//     // let max = numArr[0];

//     // for (let i = 0; i < numArr.length; i++) {
//     //     if (numArr[i] < min) min = numArr[i];
//     //     if (numArr[i] > max) max = numArr[i];  
//     // }
//     for (let i = 0; i < numArr.length; i++) {
//         for (let j = i + 1; j < numArr.length; j++) {
//             if (numArr[i] > numArr[j]) {
//                 temp = numArr[i];
//                 numArr[i] = numArr[j];
//                 numArr[j] = temp;
//             }
//         }
//     }
//     let diff = arr[0] - 0;
//     for(let i = 0; i < numArr.length; i++)
//     {
//         // Check if diff and arr[i]-i
//         // both are equal or not
//         if (numArr[i] - i != diff)
//         {
//             // Loop for consecutive missing elements
//             while (diff < numArr[i] - i)
//             {
//                missing2.push(i + diff);
//                 diff++;
//             }
//         }
//     }

// return missing2
// }
// console.log(missing2([0, 5, 4, 9, 3]));

//Find  the missing number in this array 
function missingNum(arr) {
    let sum = 0;
    let expectedSum = 0;
    expectedSum = (arr.length * (arr.length + 1)) / 2
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return expectedSum - sum;
}
// console.log(missingNum([0,1,3]));

/////////////////////////////////////////////////////////**21**////////////////////////////////////////////
///3. Get all prim numbers between 1-100 //prime is divided by 1 and itself
function prime() {
    for (let number = 1; number < 100; number++) {
        let prime = true;
        // Run a loop from 2 to number-1
        for (let j = 2; j < number; j++) {
            // if the number is divisible by j, then number is not a prime number.
            if (number % j === 0) {
                prime = false;
            }
        }
        //check if current number is prime
        if (prime) console.log(number);
    }
}
// prime()
////////////////////////////////////////////////////////**22**/////////////////////////////////////////////
//6. Find all unique characters in a string .
//  Input:  Geeksforgeeks
//output:[ 'G', 'f', 'o', 'r', 'g' ]
function unique(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) arr.push(str[i]);
    }
    return arr
}
function unique3(str) {
    let obj1 = {}
    let arr2 = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] in obj1) {
            obj1[str[i]] += 1;
        }
        else {
            obj1[str[i]] = 1;
        }
    }
    for (let key in obj1) {
        if (obj1[key] === 1) {
            arr2.push(key)
        }
    }
    return arr2;
}
// console.log(unique3("Geeksforgeeks"));

//////////////////////////////////////////////////////////**23**////////////////////////////////////////
// return uniqee number in array
function unique4(arr) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) { count++ }
        }
        if (count == 1) {
            arr3.push(arr[i])
        }
    }
    return arr3
}
//   console.log(unique4([1,2,2,2,3,4]));

//////////////////////////////////////////////**24**////////////////////////////////
//remove duplicate in a string
//return string without duplicates
//   Input:  Geeksforgeeks
// Output: Geksforg
function removedublicate(str) {
    let str1 = ""
    for (let i = 0; i < str.length; i++) {
        // If the character not present in str1
        // Concatenate the character with str1
        if (str1.includes(str[i]) == false) {
            str1 += str[i]
        }
    }
    return str1;
}
// console.log(removedublicate("Geeksforgeeks"));

///////////////////////////////////////////////////**25**////////////////////////////////
//remove duplicate in a array
function removedublicate2(arr) {
    let arrh = []
    for (let i = 0; i < arr.length; i++) {
        if (!arrh.includes(arr[i])) {
            arrh.push(arr[i])
        }
    }
    return arrh
}
function removeDuplicateArray(arr) {
    let remo = arr.filter((ele, ind) => {
        return arr.indexOf(ele) === ind;
    })
    return remo
}
// console.log(removedublicate2([1,2,2,2,3,4,4,5,5]));

/////////////////////////////////////////////////////////////////////**26**///////////////////////
// Add a number to the middle of a numbers array.
function addToMid(arr, num) {
    let mid = Math.floor(arr.length / 2);
    //   arr.splice(mid,0,num);
    //   return arr
    let newArr = [];
    // for(let i=0;i<mid;i++){
    //     newArr.push(arr[i]) 
    // }
    // newArr.push(num);
    // for(let i=mid;i<arr.length;i++){
    //     newArr.push(arr[i]) 
    // }
    for (let i = 0; i < arr.length; i++) {
        if (i == mid) {
            newArr.push(num)
        }
        newArr.push(arr[i])
    }
    return newArr
}
// console.log(addToMid([1,2,3,4,5,6],10));

///////////////////////////////////////////////////////// **27**//////////////////////////////////////////////

//Write a function that will return a string combined with the number of letters between the fist and the last letter.
// input = 'Jack', output: 'J2k' What is the difference between get and post requests?
function stringbet(str) {
    return `${str[0]}${str.length - 2}${str[str.length - 1]}`;
}
// console.log(stringbet("jack"));

/////////////////////////////////////////////////**28**//////////////////////////////////////

/////reverse an array without using built in functions like array 
function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
// console.log(reverse([0, 5, 4, 9, 3]));
function rever(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    return arr
}
// console.log(rever([1,2,3,4]));

///////////////////////////////////////////////////**29**/////////////////////////////////

// reverse an array without defining a a new one and without using built in functions like array 
//reverse for example: [1,2,3,4,5] => [5,4,3,2,1]
function reverse2(arr) {
    let num = arr.join("")//convert to string 12345
    let last;
    let rev = 0;
    while (num != 0) {
        last = num % 10;
        rev = rev * 10 + last;
        num = Math.floor(num / 10);
    }
    //split convert string in to array[ '5', '4', '3', '2', '1' ]
    return rev.toString().split('').map((str) => Number(str));
}
// console.log([1,2,3,4,5] );
// console.log(reverse2([1, 2, 3, 4, 5]));

////////////////////////////////////////////////**30**/////////////////////////////////////////

// find the anagram if two word has the same characters for example word 1: listen, word 2: silent, 
//if the characters are the same return true otherwise return false
function compare(str1, str2) {
    // let n1 = str1.length;
    // let n2 = str2.length;
    // // If length of both strings is not same,
    // // then they cannot be anagram
    // if (n1 != n2)
    //     return false;

    // Sort both strings
    let x = str1.split('').sort().join('');
    let y = str2.split('').sort().join('');
    if (x == y) return true;
    else return false;
    // if sorted write this code .Compare sorted strings
    // for (let i = 0; i < n1; i++)
    //     if (str1[i] != str2[i])
    //         return false;
    // return true;

}
// console.log(compare("listen","silent"));

/////////////////////////////////////********31***//////////////////////////////////////////////////

//check if two words with different order of the letters have same letters or not
function checkWords(str1, str2) {
    let obj = {}
    // for(let i=0;i<str1.length;i++){
    //   if(obj[str1[i]]){
    //     obj[str1[i]]+=1
    //   }
    //     else{
    //   obj[str1[i]]=1
    //     }
    // }
    // for(let i=0;i<str2.length;i++) {
    //     if ( !str2[i] in obj) {
    //        return false
    //     }
    //     return true
    // }

}
// console.log(checkWords("listen","silent"));

////////////////////////////////////////////////////////////////////**32**////////////////////////////////
//sort function for agiven array of numbers
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
// console.log("Sorted array=>", sort([4, 32, 2, 5, 8]));

///////////////////////////////////////////////////////////////////////**33**///////////////////////////////////// 
//Given an array like this [1, 6, 9, 2, 5, 7, 11], 
// write a function that returns the highest and the second highest values in the array
function height(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return "highest element  is " + arr[arr.length - 1] + " the second highest value is " + arr[arr.length - 2];
}
// console.log( height([4, 32, 2, 5, 8]));

//////////////////////////sort array
const sortArr = (arr) => {
    return arr.sort((a, b) => a - b);
}

///////////////////////
const removeDublicate = (arr) => {
    let newArr = arr.filter((arr, i) => {
        arr[i] === lastIndexOf(arr[i])
    })
    console.log(newArr)
}
/////////////////////////
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}
//////////////////////////////////////////////
//***1**convert the first letter of each word in a string to uppercase
function upper(str) {
    let arr = str.split(" ");
    let upperWords = arr.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    return upperWords
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    // }
    // let str2 = arr.join(" ");
    // return str2
}
// console.log(upper("freeCodeCamp is an awesome resource"));
//////
//**2**check string 2 include string1
function checkIncludes(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            return false
        }
        else {
            return true
        }
    }
}
// console.log(checkIncludes("Hello world, welcome to the universe.","g"));

///////**3**////convert binary to decimal
function binaryToDecimal(num) {
    let dec_value = 0;
    // Initializing base value to 1, i.e 2^0
    let base = 1;
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] == '1'){
            dec_value += base;
            base = base * 2;
        }     
    }
    return dec_value;
    // return parseInt(num, 2)
}
console.log(binaryToDecimal("10101001"));
////////////////

///**4**////
function nextUniqueYear(string) {
    let yearNum = +string + 1;//number
    let yearStr = yearNum.toString();//string
    // console.log(new Set(yearStr));
    if (new Set(yearStr).size === yearStr.length) {
        console.log(yearStr);
    } else {
        nextUniqueYear(yearStr);
    }
}
nextUniqueYear("1987");
////////
//**5**if you have AAAAADDDAADDDD find the most repeated character,
function repeated3(str) {
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]] += 1;
        }
        else {
            count[str[i]] = 1;
        }
    }
    let max = 0
    for (let key in count) {
        if (count[key] > max) {
            max = count[key]
            text = key + ":" + max;
        }
    }
    return text
}
// console.log(repeated3('swsssssssswaaanaeaa'));
///*6**
//, check if the string had all the English alphabet or not and allow repeated characters
