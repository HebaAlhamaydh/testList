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

// given an integer array count the number of element that occur more than once 
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
//   Application logs are used in analysis of interactions with an application and may be used to detect specific actions. 
//   A log file is provided as a string array where each entry is in the form "user.id timestamp action"'.
//    Each of the values is separated by a space. - Both user_id and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit. - timestamp represents the time in seconds since the application was last launched - action will be either "sign-in" or "sign-out" Given a log with entries in no particular order, return an array of strings that denote user_id's of users who signed out in maxSpan seconds or less after signing in.
  function findUsersWithMaxSpan(log, maxSpan) {
    const signInTimes = {};
    const signOutTimes = {};
    const result = [];
  
    for (let i = 0; i < log.length; i++) {
      const [userId, timestamp, action] = log[i].split(' ');
  
      if (action === 'sign-in') {
        signInTimes[userId] = Number(timestamp);
      } else {
        signOutTimes[userId] = Number(timestamp);
        const span = signOutTimes[userId] - signInTimes[userId];
        if (span <= maxSpan) {
          result.push(userId);
        }
      }
    }
  
    return result;
  }
//   In this code, we first create two hash maps signInTimes and signOutTimes to keep track of the latest sign-in and sign-out times for each user. We also create an empty array result to store the user IDs of users who signed out within maxSpan seconds of signing in.
  
//   We then loop over the log and split each entry into its user ID, timestamp, and action components. For each sign-in event, we update the signInTimes hash map with the latest sign-in time for that user. For each sign-out event, we update the signOutTimes hash map with the sign-out time for that user, and calculate the time span between the sign-in and sign-out times.
  
//   If the time span is less than or equal to maxSpan, we push the user ID onto the result array.
  
//   Finally, we return the result array, which contains the user IDs of users who signed out within maxSpan seconds of signing in.
  
// logs
// =[
// ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"] maxSpan = 20 The users with id's 30 and 12 were not signed in for more than maxSpan
// =20
// In sorted numerical order, the return array is
// ["12","30%
  
  
  ///////////////////////////////
  /////To solve this problem, we can use dynamic programming. We will define a 2D array dp, where dp[i][j] represents the number of distinct paths to reach warehouse[i][j] from warehouse[0][0]. We can then calculate dp[i][j] using the values of dp for previous cells.
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
    const MOD = 1000000007;
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

  