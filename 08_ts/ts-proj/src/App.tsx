import { QueryClient, QueryClientProvider } from "react-query"
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Counter from "./components/Counter";
import Fetch from "./components/Fetch";
import Query from "./components/Query";

function App() {

  const cli = new QueryClient()

  return (
    <div className="container">
      <Comp1 input={"Comp1"}/>
      <Comp2 input={"Comp2"}/>
      <Comp3>
        <p>Childrenの要素</p>
      </Comp3>
      <Counter/>

      <h2 className="mt-3">Fetch</h2>
      <Fetch/>

      <h2 className="mt-3">Query</h2>
      <QueryClientProvider client={cli}>
        <Query/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
