const findMinimum = arr => {
  // Your code here
  let min = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
  }

  return min;

  // Space complexity O(1) || Time complexity O(n)
};

const runningSum = arr => {
  // Your code here
  let newArr = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
    newArr.push(arr[i] + arr[i - 1]);
  }

  return newArr;
  // Space complexity O(n) || Time complexity O(n)
};

const evenNumOfChars = arr => {
  // Your code here
  let evens = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length % 2 === 0) {
      evens++;
    }
  }

  return evens;
  // Space complexity O(1) || Time complexity O(n)
};

const smallerThanCurr = arr => {
  // Your code here
  let sol = [];

  for(let i = 0; i < arr.length; i++) {
    let smallers = 0;
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        smallers++;
      }
    }
    sol.push(smallers);
  }
  // Space complexity O(n) || Time complexity O(n^2)
};

const twoSum = (arr, target) => {
  // Your code here
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if((arr[i] + arr[j]) === target) {
        return true;
      }
    }
  }

  return false;
  // Space complexity O(1) || Time complexity O(n^2)
};

const secondLargest = arr => {
  // Your code here
  let first;
  let second;
  if(arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }

  for(let i = 2; i < arr.length; i++) {
    if(arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second;
  // Space complexity O(1) || Time complexity O(n)
};

const shuffle = (arr) => {
  // Your code here
  let newArr = [...arr];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
  // Space complexity O(n) || Time complexity O(n)
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
