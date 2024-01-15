import { RouterProvider } from "react-router-dom";
import routesLink from "./components/RouterLink";

function App() {
  return (
    <div className="container">
      <RouterProvider router={routesLink}/>
    </div>
  );
}

export default App;
