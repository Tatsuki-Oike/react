import { QueryClient, QueryClientProvider } from "react-query"
import Fetch from "./components/Fetch";
import LoadFetch from "./components/LoadFetch";
import ErrorFetch from "./components/ErrorFetch";
import QueryFetch from "./components/QueryFetch";


function App() {

  const cli = new QueryClient()
  
  return (
    <div className="container mt-3">
      
      <h2> API </h2>
      <h3> 1 Fetch </h3>
      <Fetch/>

      <h3> 2 Load Fetch </h3>
      <LoadFetch/>

      <h3> 3 Error Fetch </h3>
      <ErrorFetch/>

      <h3> 4 Query Fetch </h3>
      <QueryClientProvider client={cli}>
        <QueryFetch/>
      </QueryClientProvider>

    </div>
  );
}

export default App;
