import React, { Component } from 'react';
import {Table,Button} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			student:[],
		}
		autoBind(this);
	}

	componentDidMount() {
		fetch('http://localhost:3001/viewall')
      .then((response)=> {return response.json()})
      .then((result) => {this.setState({student:result})})
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
				<Table.Row textAlign="center">
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
			<Table.Body>
			{this.state.student.map((item,index)=>{
				return(<Table.Row key={index}>
					<Table.Cell>{item.course_no}</Table.Cell>
					<Table.Cell>{item.student_no}</Table.Cell>
					<Table.Cell>{item.last_name}</Table.Cell>
					<Table.Cell>{item.first_name}</Table.Cell>
					<Table.Cell>{item.college}</Table.Cell>
					<Table.Cell>{item.sem_year}</Table.Cell>
					<Table.Cell>{item.grade}</Table.Cell>
					<Table.Cell>{item.instructor}</Table.Cell>
					<Table.Cell>{item.remove_date}</Table.Cell>
					<Table.Cell>{item.remarks}</Table.Cell>
				</Table.Row>)
			})}
			</Table.Body>
    	</Table>
			<br/><br/>
			<a href={oldURL}><Button content="Back" size="large" color="red"/><br/></a>
    </div>
    );
   }
}

export default Home;