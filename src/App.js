import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Post from './Components/Post';
import Mysite from './Components/Mysite'
import { Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import NoMatch from './Components/NoMatch';
import Signup   from './Components/Signup';

class App extends React.Component {
  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        main: () => <Login />
      },
      {
        path: '/signup',
        exact: true,
        main: () => <Signup />
      },
      {
        path: '/post',
        exact: true,
        main: () => <Post />
      },
      {
        path: '/mysite',
        exact: true,
        main: () => <Mysite />
      },
      {
        path: '/about',
        exact: true,
        main: () => <About />
      },
      {
        path: '/dashboard',
        exact: true,
        main: () => <Dashboard />
      },
      {
        path: '/nomatch',
        exact: true,
        main: () => <NoMatch />
      },
    ]
    return (
      <div className="App">
        <Header />
          {console.log(this.props.date)}
          <Switch className="container">
            {routes.map((route,index) => (
              <Route 
              key={index}
              exact={route.exact}
              children={<route.main />}
              path={route.path} />
            ))}
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
