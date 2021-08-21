import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About"
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route exact path = "/about">
          <About />
        </Route>
        <Route></Route>
        <Route></Route>
      </Layout>
    </Switch>
  );
}

export default App;
