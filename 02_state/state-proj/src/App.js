import State from "./components/State";
import Event from "./components/Event";
import Arg from "./components/Arg";
import Reducer from "./components/Reducer";

function App() {
  return (
    <div className="container">
      <h2 className="mt-3"> Stateとイベント </h2>
      <State/>
      <Event/>
      <Arg/>
      <Reducer/>
    </div>
  );
}

export default App;
