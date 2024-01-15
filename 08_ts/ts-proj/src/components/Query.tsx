import { useQuery } from "react-query"
import { useEffect } from "react";

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

export default function Query() {

    const { data, isLoading, isError, error } = 
        useQuery<ResponseType, Error>("Query", fetchData, {
      retry: false,
    })

    useEffect(() => {
      if (isError) {
        console.log("Hello");
      }
    }, [isError]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    return (
        <p> {data?.msg} </p>
    )
  }
