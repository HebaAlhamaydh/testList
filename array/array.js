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



