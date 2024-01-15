import { useQuery } from "react-query"
import LoadFallback from "./LoadFallback"
import ErrorFallback from "./ErrorFallback"

const fetchData = async () => {
    await fetch("http://127.0.0.1:5000")
    throw new Error("Errorを発生させます")
    // const response = await fetch("http://127.0.0.1:5000")
    // throw new Error("Errorを発生させます")
    // if (response.ok) {
    //     return await response.json()
    // }
    // throw new Error(response.statusText)
}

export default function QueryFetch() {

    const { data, isLoading, isError, error, refetch } = 
      useQuery("QueryFetch", fetchData, {
          retry: false,
        })

    if (isLoading) {
      return <LoadFallback/>
    }

    if (isError) {
      return <ErrorFallback errorMessage={error.message} onRetry={refetch}/>
    }

    return (
        <p> {data} </p>
    )
  }
