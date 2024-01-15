import { useEffect, useState } from "react"

type ResponseType = {
    msg: string
}

const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000")
    if (response.ok) {
        return await response.json() as ResponseType
    }
    throw new Error(response.statusText)
}

export default function Fetch() {

    const [data, setData] = useState<ResponseType>()
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
      setPending(true)
      fetchData()
      .then(result =>
        setData(result)
      )
      .catch(e => 
        setError(e.message)  
      )
      .finally(() => setPending(false))
    }, [])

    if (pending) {
      return <p>Loading...</p>
    }
    
    if (error) {
      return <p>Error</p>
    }

    return (
            <p>{data?.msg}</p>
    );
  }
