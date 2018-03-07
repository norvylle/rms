import React, { Component } from 'react';
import {Table,Button} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			course_no:[],
			student_no:[],
			last_name:[],
			first_name:[],
			college:[],
			sem_year:[],
			grade:[],
			instructor:[],
			remove_date:[],
			remarks:[]
		}
		autoBind(this);
	}

  render() {
    return (
    <div>
    	<Table celled selectable>
    	<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colspan="10" textAlign="center">Student</Table.HeaderCell>
	          	</Table.Row>
			</Table.Header>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>Course no.</Table.HeaderCell>
	          		<Table.HeaderCell>Student no.</Table.HeaderCell>
	          		<Table.HeaderCell>Last Name</Table.HeaderCell>
	          		<Table.HeaderCell>First Name</Table.HeaderCell>
	          		<Table.HeaderCell>College</Table.HeaderCell>
	          		<Table.HeaderCell>Sem / Year</Table.HeaderCell>
	          		<Table.HeaderCell>Grade</Table.HeaderCell>
	          		<Table.HeaderCell>Instructor</Table.HeaderCell>
	          		<Table.HeaderCell>Remove Date</Table.HeaderCell>
	          		<Table.HeaderCell>Remarks</Table.HeaderCell>
	      		</Table.Row>
			</Table.Header>
    	</Table>
			<br/><br/>
			<a href={oldURL}><Button content="Back" size="large" color="red"/><br/></a>
    </div>
    );
   }
}

export default Home;