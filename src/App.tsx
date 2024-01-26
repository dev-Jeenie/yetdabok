import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteComponents from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RouteComponents />
    </BrowserRouter>
  );
}

export default App;
