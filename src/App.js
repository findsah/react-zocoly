import "./App.css";
import Topbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Topbar {...props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
