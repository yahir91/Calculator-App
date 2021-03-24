import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
