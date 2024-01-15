import { useEffect, useState } from "react"

const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000")
    if (response.ok) {
        return await response.json()
    }
    throw new Error(response.statusText)
}

export default function Fetch() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData()
        .then(result =>
            setData(result)
        )
    }, [])

    return (
        <p>{data && data.msg}</p>
    );
  }
