import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {Button} from 'antd';
import './App.css';
import Main from './components/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact />
            <Route exact />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
