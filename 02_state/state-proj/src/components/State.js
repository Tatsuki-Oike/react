import { useState } from "react"

export default function State() {

    const [count, setCount] = useState(0)
    const plusOne = () => {
        setCount(count + 1)
    }

    return (
        <div className="my-4">
            <h2> State </h2>
            <p> {count} </p>
            <button className="btn btn-primary" onClick={plusOne}> +1 </button>
        </div>
    );
  }
  