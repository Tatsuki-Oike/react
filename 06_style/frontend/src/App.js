import Normal from "./components/Normal";
import StyledJSX from "./components/StyledJSX";
import Global from "./components/Global";
import Partial from "./components/Partial";
import StyledCSS from "./components/StyledCSS";

function App() {
  return (
    <div className="container mt-3">

      <h2> App.js </h2>
      <h4 className="Normal"> Normalクラス </h4>
      <h4 className="StyledJSX"> StyledJSXクラス </h4>
      <h4 className="Global"> Globalクラス </h4>
      <h4 className="Partial"> Partialクラス </h4>
      <h4 className="StyledCSS"> StyledCSSクラス </h4>

      <h2 className="mt-5"> Components </h2>
      <Normal/>
      <StyledJSX/>
      <Global/>
      <Partial/>
      <StyledCSS/>

    </div>
  );
}

export default App;
