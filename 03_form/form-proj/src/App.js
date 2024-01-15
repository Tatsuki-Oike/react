import Form from "./components/Form"
import Ref from "./components/Ref"
import Various from "./components/Various"
import Validate from "./components/Validate";
import Yup from "./components/Yup";

function App() {
  return (
    <div className="container"> 
      <h2 className="mt-3"> Form-proj </h2>
      <Form/>
      <Ref/>
      <Various/>
      <Validate/>
      <Yup/>
    </div>
  );
}

export default App;
