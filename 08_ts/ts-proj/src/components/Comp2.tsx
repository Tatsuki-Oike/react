import { FC } from "react"

type Comp2Props = {
    input: string
}

const Comp2: FC<Comp2Props> = ({input}) => {
    return (
        <h2 className="mt-3">{ input }</h2>
    )
}

export default Comp2