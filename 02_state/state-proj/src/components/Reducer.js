import { useReducer } from "react"

export default function Reducer() {
    
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch(action.type){
                case "plus":
                    return { count: state.count + 1 }
                case "reset":
                    return { count: 0 }
                default:
                    return state
            }
        },
        {
            count: 0
        }
    )

    const plusFunc = () => {
        dispatch({ type: "plus" })
    }

    const resetFunc = () => {
        dispatch({ type: "reset" })
    }

    return (
        <div className="my-4">
            <h2> Reducer </h2>
            <p> {state.count} </p>
            <button className="btn btn-primary" onClick={plusFunc}>
                + 1 
            </button>
            <button className="btn btn-primary mx-3" onClick={resetFunc}> 
                reset 
            </button>
        </div>
    );
  }
