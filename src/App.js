import React, { Component } from 'react';
import './App.css';
import {Segment,Header,Icon,Input,Button} from 'semantic-ui-react';

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
          <br/><br/><br/><br/>
          <Input placeholder="Username" size="big"/>
          <br/><br/>
          <Input placeholder="Password" size="big" type="password"/>
          <br/><br/>
          <Button size="big" primary>Login</Button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Segment>
      </div>
    );
  }
}

export default App;
