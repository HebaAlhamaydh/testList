//1)  kafana company problem
// Given an array of integers, change it in such
// a way that it follows a zig-zag pattern. A zig-
// zag array is one where for each integer, its
// adjacent integers are both greater than or
// less than itself. In other words, using L to
// mean a lower value and H to mean higher,
// the array follows either the pattern
// [L,H,L,H...] or [H,L,H,L...]. To make the array a
// zig-zag array, you can replace any element
// with any other integer (positive, negative, or
// zero). What is the minimum number of
// replacements required to accomplish this?
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
///////////

// 2)  given an integer array count the number of element that occur more than once 
function countDuplicateElements(arr) {
    const obj = {};
    let duplicates = 0;
  
    // count the occurrence of each element in the array
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] ) {
        obj[arr[i]]++;
       
      } else {
        obj[arr[i]] = 1;
      }
    }
  
    // count the number of elements that occur more than once
    for (let key in obj) {
      if (obj[key] > 1) {
        duplicates++;
      }
    }
  
    return duplicates;
  }

  //////////////
  // logs=["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]
  // Application logs are used in analysis of interactions with an application and may be used to detect specific actions. 
  // A log file is provided as a string array where each entry is in the form "user.id timestamp action"'.
  //  Each of the values is separated by a space. - Both user_id and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit. - 
  //timestamp represents the time in seconds since the application was last launched - action will be either "sign-in" or "sign-out" Given a log with entries in no particular order, 
  //return an array of strings that denote user_id's of users who signed out in maxSpan seconds or less after signing in.
  function findUsersWithMaxSpan(log, maxSpan) {
    const signInTimes = {};//(an empty object that will be used to store the last sign-in time for each user) 
    const signOutTimes = {};//(an empty object that will be used to store the last sign-out time for each user) 
    const result = []; //store the user IDs of users who signed out within maxSpan seconds of signing in.
  
    for (let i = 0; i < log.length; i++) {
      const [userId, timestamp, action] = log[i].split(' ');
  
      if (action === 'sign-in') {
        signInTimes[userId] = parseInt(timestamp);//update with the last sign in for the user
      } else {
        signOutTimes[userId] = parseInt(timestamp);//update with the last sign out for the user
        const span = signOutTimes[userId] - signInTimes[userId];
        if (span <= maxSpan) {//بمدة اقل من المحددة عمل تسجيل خروج بسرعة 
          result.push(userId);
        }
      }
    }
  
    return result;
  }
//   In this code, we first create two hash maps signInTimes and signOutTimes to keep track of the latest sign-in and sign-out times for each user.
// We also create an empty array result to store the user IDs of users who signed out within maxSpan seconds of signing in.
  
//   We then loop over the log and split each entry into its user ID, timestamp, and action components
//.For each sign-in event, we update the signInTimes hash map with the latest sign-in time for that user.
// For each sign-out event, we update the signOutTimes hash map with the sign-out time for that user, 
//and calculate the time span between the sign-in and sign-out times.
  
//   If the time span is less than or equal to maxSpan, we push the user ID onto the result array.
//   Finally, we return the result array, which contains the user IDs of users who signed out within maxSpan seconds of signing in.
  
// logs
// =[
// ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]
// maxSpan = 20 The users with id's 30 and 12 were not signed in for more than maxSpan
// =20
// In sorted numerical order, the return array is
// ["12","30"]
  
  
  ///////////////////////////////
  ///To solve this problem, we can use dynamic programming. We will define a 2D array dp, where dp[i][j] represents the number of distinct paths to reach warehouse[i][j] from warehouse[0][0]. We can then calculate dp[i][j] using the values of dp for previous cells.
  // A forklift worker moves products from one place to
  // the other in an automotive parts warehouse. There
  // a map in the dashboard that shows, in real time,
  // the open and blocked sections inside the
  // warehouse. The map is displayed as an nxm
  // matrix of 1's and O's which represent open and
  // blocked sections respectively. A forklift driver
  // always starts at the upper left corner of the map at
  // warehouse[0][0] and tries to reach the bottom right
  // section of the map or warehouse[n-1][m-1). Each
  // movement must be in increasing value along a row
  // or column but not both. Given the warehouse
  // map, determine the number of distinct paths to get
  // from warehouse[0][0] to warehouse[n-1][m-1). The
  // number may be large, so return the value modulo
  // (109+7)
// The base cases are dp[0][0] = 1 (since there is only one way to reach the starting cell) and dp[0][j] = 1 if warehouse[0][j] is an open section, and similarly for dp[i][0]. For other cells, we can calculate dp[i][j] as follows:
// If warehouse[i][j] is a blocked section, then dp[i][j] = 0.
// Otherwise, dp[i][j] = dp[i-1][j] + dp[i][j-1] (since we can reach warehouse[i][j] either by coming from cell (i-1, j) or from cell (i, j-1)).
// Finally, the answer will be dp[n-1][m-1] % (10^9 + 7), where % is the modulo operator
  function countDistinctPaths(warehouse) {
    const MOD = 10^9+7;
    const n = warehouse.length;
    const m = warehouse[0].length;
    const dp = new Array(n).fill().map(() => new Array(m).fill(0));
    dp[0][0] = 1;
    for (let j = 1; j < m; j++) {
        if (warehouse[0][j] === 1) {
            dp[0][j] = dp[0][j-1];
        }
    }
    for (let i = 1; i < n; i++) {
        if (warehouse[i][0] === 1) {
            dp[i][0] = dp[i-1][0];
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (warehouse[i][j] === 1) {
                dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % MOD;
            }
        }
    }
    return dp[n-1][m-1] % MOD;
}

  //where dp[i][j] represents the number of distinct paths to reach warehouse[i][j] from warehouse[0][0]

// const warehouse = [  [1,1],
//                      [0,1]
// ];
// const warehouse = [  [1,1,0,1],
//                      [1,1,1,1]
// ];
// const warehouse = [  [1,1,1,1],
//                      [1,1,1,1],
//                      [1,1,1,1]
// ];
// console.log(countDistinctPaths(warehouse)); // Output: 2

  //////////////////designerPdfViewer////////////////////
// When selecting text in a PDF document, each word is highlighted with a blue rectangle. 
// Each letter of the selected word has a certain height within the rectangle.
// Given the height of each letter within the highlighted block, the purpose of the function is to determine the area of the highlighted block.

// Let’s use an example:

// let h = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
// let word = “peak”;


function designerPdfViewer(h, word) {
  
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letterHeight = [];
  
  for (let i = 0; i < word.length; i++){
    letterHeight.push(h[letters.indexOf(word[i])]);
  }
  // let max=letterHeight.sort();
  // max=letterHeight[letterHeight.length-1]
  // or 
  let tallest = letterHeight.sort()[letterHeight.length-1];
  
  return tallest * word.length;
  
}
// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle.
//  In this PDF viewer, each word is highlighted independently. For example:
// There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. 
// Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

////////////////////
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// s = 7, t = 11, a = 5, b = 15, apples = [-2, 2, 1], oranges = [5, -6]
// totalApples = 0, totalOranges = 0
// Traverse through apples list.
// index = 0 | 5 + -2 >= 7 && 5 + -2 <= 11 becomes false.
// index = 1 | 5 + 2 >= 7 && 5 + 2 <= 11 becomes true.
// totalApples++ | totalApples = 1.
// index = 2 | 5 + 1 >= 7 && 5 + 1 <= 11 becomes false.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApple=0;
  let countOranges=0;
  for(let i=0;i<apples.length;i++){
if((a+apples[i])>=s&&(a+apples[i])<=t){
  countApple++;
}
  }
  for(let j=0;j<oranges.length;j++){
if((b+oranges[i])>=s&&(b+oranges[i]<=t)){
  countOranges++;
}
  }
  console.log(countApple);
  console.log(countOranges);
}