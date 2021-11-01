import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
    const [numArr, setnumArr] = useState<number[]>([1]);

    return (
        <>
            <h1>FizzBuzz App</h1>
            <p>{numArr}</p>
            <button>Next</button>
        </>
    )
}