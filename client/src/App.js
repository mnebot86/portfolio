import { Route, Switch } from "react-router-dom";
import Main from './screens/Main/Main';
// import Layout from './components/Layout/Layout'
import Hero from "./screens/Hero/Hero";
import './App.css'

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route path='/main' component={Main}/>
    </Switch>
  </>
  );
}

export default App;
