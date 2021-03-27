import "./App.css";
import Topbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/productdetail/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
