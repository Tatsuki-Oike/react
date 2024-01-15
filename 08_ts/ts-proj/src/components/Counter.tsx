import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState<number>(0)
    const plusOne = () => setCount(count + 1)

    return (
        <>
            <h2> Counter </h2>
            <p>{ count }</p>
            <button className="btn btn-outline-primary" onClick={plusOne}>
                + 1 
            </button>
        </>
    )
}