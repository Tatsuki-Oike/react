import HelloWorld from "./components/HelloWorld";
import InputText from "./components/InputText";

function App() {
  const text = "Hello, World"

  return (
    <div className="container">
      <h2 className="mt-3"> Sample Project </h2>

      <p> {text} </p>
      <HelloWorld/>
      <InputText text="Hello, World" />
    </div>
  );
}

export default App;
