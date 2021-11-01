export function fizzBuzzDemo(numArr: string[]): string[] {
  const currentNumber = numArr.length + 1;
  const newArr = [...numArr];

  if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
    newArr.push("FizzBuzz");
  } else if (currentNumber % 3 === 0) {
    newArr.push("Fizz");
  } else if (currentNumber % 5 === 0) {
    newArr.push("Buzz");
  } else {
    newArr.push(currentNumber.toString());
  }

  return newArr;
}
