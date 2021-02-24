import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import About from './pages/About';
import Archive from './pages/Archive';
import NoMatch from './pages/NoMatch';

import Nav from './components/Nav';
import Footer from './components/Footer';

import { ResetScrollComp } from './RouterGuard/resetScroll'

import "./App.css";
import "animate.css";

function App() {
  return (<div id="wrapper">
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/blog" component={Blog} exact={true} />
        <Route path="/detail/:id" component={Detail} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/archive" component={Archive} exact={true} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
      <ResetScrollComp />
    </Router>
  </div>)
};

export default App;