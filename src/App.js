import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
