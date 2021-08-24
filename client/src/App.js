import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Layout from "./components/Layout/Layout";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
