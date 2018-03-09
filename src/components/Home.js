import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class Home extends Component {

  render() {
    return (
    <div>
    	<a href={"/user/add"}><Button content="Add Record" size="large" fluid/></a><br/>
    	<a href={"/user/edit"}><Button content="Edit Record" size="large" fluid/></a><br/>
    	<a href={"/user/delete"}><Button content="Delete Record" size="large" fluid/></a><br/>
    	<a href={"/user/view"}><Button content="View Record/s" size="large" fluid/></a><br/><br/>
    	<a href={"/"}><Button content="Logout" size="large" color="red"/><br/></a>
    </div>
    );
   }
}

export default Home;