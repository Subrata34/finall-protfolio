

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  // AOS.init({duration: 1000});
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
