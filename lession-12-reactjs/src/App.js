import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">

      <Router>

        <Header />

        <Switch>
          <Redirect exact from="/" to="sign-in" />

          <Route path="/home" component={HomePage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={NotFound} />
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
