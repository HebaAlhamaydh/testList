/////7////////
//input
let num1 = 14;
//output
//6
function timeOfMeasurment(num1) {
    let count = 0;
    while (num1 > 0) {
        if (num1 % 2 === 0) {
            num1 = num1 / 2;
        }
        else {
            num1 = num1 - 1;
        }
        count++;
    }
    return count;
}
console.log(' timeOfMeasurment : ', timeOfMeasurment(num1));
  //////////////////14//////////
//input 
let day = 16 ;
let month = 3 ;
//output
//7
function getMonth (day,month){
    let result = day+month - (Math.floor((day+month)/12)*12);
    return result;
  }
  console.log('14. getMonth : ' ,getMonth(day,month));


/**'- given an array, return an array for the elements that don't have greater
   *  elements on the right side of them.. EX: [2,8,5,4] => [8,5,4] */
 function elementInArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}
console.log(elementInArr([16, 17, 4, 3, 5, 2]));




//check if two words with different order of the letters have same letters or not(no built function)




//////
//Find all the missing numbers between the min and the max number in this array 
//(No built in methods allowed) array = [0, 5, 4, 9, 3]; 



