function validate(num: number): boolean {
  return num >= 1 && Math.floor(num) === num;
}

function addNewFibonacciNumber(arr: number[]) {
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
}

function fibonacciArray(num: number): number[] {
  // No getting around inputs 1 & 2
  if (num === 1) {
    return [0];
  }

  const startingArray = [0, 1];

  if (num === 2) {
    return startingArray;
  }

  for (let i = 2; i < num; i++) {
    addNewFibonacciNumber(startingArray);
  }

  return startingArray;
}

function displayArray(arr: any[]) {
  arr.forEach((item) => console.log(item));
}

function fib(num: number) {
  if (!validate(num)) {
    console.log("Invalid input!");
    return;
  }

  displayArray(fibonacciArray(num));
}

fib(10);
