import React from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Signin/Login";
import Post from './Components/Dashboard/Post';
import Mysite from './Components/Mysite'
import { Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About';
import NoMatch from './Components/NoMatch';
import Signup   from './Components/Signup';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
          {console.log(this.props.date)}
          <Switch className="container">
            <Route exact path="/" component={Login} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/nomatch" component={NoMatch} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/mysite" component={Mysite} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
