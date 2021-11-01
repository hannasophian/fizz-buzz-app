import { useState } from "react";
import { fizzBuzzDemo } from "./fizz-buzz-demo";

export default function FizzBuzz(): JSX.Element {
  const [numArr, setNumArr] = useState<string[]>(["1"]);

  const handleNextNumber = () => {
    setNumArr(fizzBuzzDemo(numArr));
    console.log(numArr);
  };

  return (
    <>
      <h1>FizzBuzz App</h1>
      <p>{numArr.join(", ")}</p>
      <button onClick={handleNextNumber}>Next</button>
    </>
  );
}
