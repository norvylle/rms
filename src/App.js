import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import {Segment,Header,Icon} from 'semantic-ui-react';
import Login from './components/Login';
import Home from './components/Home';
import View from './components/View';
import Add from './components/Add';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Header as='h3' icon textAlign='center'>
            <Icon name='database' circular/>
            <Header.Content>
              Records Management System
            </Header.Content>
            <br/><br/>
          </Header>
          <Segment padded="very" inverted>
              <br/><br/>
              <Router>
              <div>
                <Route exact={true} path="/" component={Login}/>
                <Route exact={true} path="/user" component={Home}/>
                <Route exact={true} path="/user/view" component={View}/>
                
                <Route exact={true} path="/user/add" component={Add}/>
                <Route exact={true} path="/user/edit" component={Home}/>
                <Route exact={true} path="/user/delete" component={Home}/>
              </div>
              </Router>
              <br/><br/>
          </Segment>
      </div>
    );
  }
}

export default App;
