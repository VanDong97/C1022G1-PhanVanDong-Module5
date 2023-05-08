import React, {useState} from "react";

export function ComponentCounter() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);
    const handleAdd = () => {
        setCount1(prevState => prevState + 1)
    }
    const handleAdd2 = () => {
        setCount2(prevState => prevState + 2)
    }
    return (
        <>
            <h1>Count : {count1}</h1>
            <button
                onClick={() => handleAdd()}>
                Add
            </button>
            <h1>Count : {count2}</h1>
            <button
                onClick={() => handleAdd2()}>
                Add
            </button>
        </>
    )
}