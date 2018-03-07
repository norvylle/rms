import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class Home extends Component {

  render() {
    return (
    <div>
    	<a href={"/"}><Button content="Add Record" size="large" fluid/></a><br/>
    	<a href={"/"}><Button content="Edit Record" size="large" fluid/></a><br/>
    	<a href={"/"}><Button content="Delete Record" size="large" fluid/></a><br/>
    	<a href={"/"}><Button content="Search Record" size="large" fluid/></a><br/>
    	<a href={"/user/view-all"}><Button content="View All Records" size="large" fluid/></a><br/><br/>
    	<a href={"/"}><Button content="Logout" size="large" color="red"/><br/></a>
    </div>
    );
   }
}

export default Home;