import { ReactNode } from "react"

type Comp3Props = {
    children: ReactNode
}

export default function Comp3({ children }: Comp3Props){
    return (
        <>
            <h2 className="mt-3"> Comp3 </h2>
            { children }
        </>
    )
}