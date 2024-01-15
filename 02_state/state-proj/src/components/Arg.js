import { useState } from "react"

export default function Arg() {
    
    const [input, inputState] = useState("")

    const inputFunc = (inputText) => {
        inputState(inputText)
    }

    return (
        <div className="my-4">
            <h2> Arg </h2>
            <p> {input} </p>
            <button className="btn btn-primary" onClick={() => inputFunc("Hello")}>
                Input Info 
            </button>
        </div>
    );
  }
  