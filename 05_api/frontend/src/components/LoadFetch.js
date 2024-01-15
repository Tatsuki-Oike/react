import { useEffect, useState } from "react"
import LoadFallback from "./LoadFallback"

const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000")
    if (response.ok) {
        return await response.json()
    }
    throw new Error(response.statusText)
}

export default function LoadFetch() {

    const [data, setData] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
      setPending(true)
      fetchData()
      .then(result =>
          setData(result)
      )
      .finally(() => setPending(false))
    }, [])

    if (pending) {
      return <LoadFallback/>
    }

    return (
      <p>{data && data.msg}</p>
    );
  }
