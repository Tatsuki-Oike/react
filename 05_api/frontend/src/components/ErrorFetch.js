import { useEffect, useState } from "react"
import LoadFallback from "./LoadFallback"
import ErrorFallback from "./ErrorFallback"

const fetchData = async () => {
    await fetch("http://127.0.0.1:5000")
    throw new Error("Errorを発生させます")
    // const response = await fetch("http://127.0.0.1:5000")
    // if (response.ok) {
    //     return await response.json()
    // }
    // throw new Error(response.statusText)
}

export default function ErrorFetch() {

    const [data, setData] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      setPending(true)
      fetchData()
      .then(result =>
        setData(result)
      )
      .catch(e => 
        setError(e)  
      )
      .finally(() => setPending(false))
    }, [])

    if (pending) {
      return <LoadFallback/>
    }
    
    if (error) {
      return <ErrorFallback errorMessage={error.message}/>
    }

    return (
      <p> {data} </p>
    );
  }
