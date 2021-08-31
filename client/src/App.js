import { Route, Switch } from "react-router-dom";
import Main from './screens/Main/Main';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Layout>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;
