import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import BookDetails from './components/BookDetails';
import Search from './components/Search';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/details/:id" component={BookDetails} />
            <Route exact path="/search" component={Search}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
