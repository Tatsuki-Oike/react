type Comp1Props = {
    input: string
}

export default function Comp1({input}: Comp1Props){
    return (
        <h2 className="mt-3">{ input }</h2>
    )
}