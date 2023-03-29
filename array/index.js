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
    const counts = {};
    let duplicates = 0;
  
    // count the occurrence of each element in the array
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]] ) {
        counts[arr[i]]++;
       
      } else {
        counts[arr[i]] = 1;
      }
    }
  
    // count the number of elements that occur more than once
    for (let key in counts) {
      if (counts[key] > 1) {
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
  
  
  
  