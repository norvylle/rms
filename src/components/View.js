import React, { Component } from 'react';
import {Table,Button,Input,Dropdown} from 'semantic-ui-react';

const autoBind = require('auto-bind');

class View extends Component {
	constructor(props){
		super(props)
		this.state = {
			student:[],
			value:"",
			key:"",
			key_placeholder:"",
			rowOptions:[
					{key:'course_no', text:'Course Number', value:'course_no'},
					{key:'student_no', text:'Student Number', value:'student_no'},
					{key:'last_name', text:'Last Name', value:'last_name'},
					{key:'first_name', text:'First Name', value:'first_name'},
					{key:'college', text:'College', value:'college'},
					{key:'sem_year', text:'Sem/Year', value:'sem_year'},
					{key:'grade', text:'Grade', value:'grade'},
					{key:'instructor', text:'Instructor', value:'instructor'},
					{key:'remove_date', text:'Remove Date', value:'remove_date'},
					{key:'remarks', text:'Remarks', value:'remarks'},
			],
		}
		autoBind(this);
	}

    goFetch(value){
    	fetch(`http://localhost:3001/search?key=${this.state.key}&value=${value}`)
      .then((response)=> {return response.json()})
      .then((result) => {console.log(result);this.setState({student:result});})
      this.forceUpdate();
    }

	handleValue(e) {
		this.setState({value:e.target.value});
		this.goFetch(e.target.value)
    }

    handleDrop(e,d){
    	this.setState({key:d.value});
    	
    	if (d.value === "student_no"){this.setState({key_placeholder:"20XX-XXXXX"});}
    	else if(d.value === "remove_date"){this.setState({key_placeholder:"YYYY-MM-DD"});}
    	else if(d.value === "remove_date"){this.setState({key_placeholder:"YYYY-MM-DD"});}
    	else{this.setState({key_placeholder:""});}
    }

	componentDidMount() {
		fetch('http://localhost:3001/viewall')
      .then((response)=> {return response.json()})
      .then((result) => {this.setState({student:result})})
    }

  render() {
    return (
    <div>
    	<Dropdown placeholder={"Search Key"}search selection options={this.state.rowOptions} onChange={this.handleDrop}/>&nbsp;&nbsp;&nbsp;
    	<Input placeholder={this.state.key_placeholder} value={this.state.value} onChange={this.handleValue}/><br/><br/>
    	<Table celled selectable>
    	<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colspan="10" textAlign="center">Student</Table.HeaderCell>
	          	</Table.Row>
			</Table.Header>
			<Table.Header>
	      		<Table.Row>
	      		{this.state.rowOptions.map((option,index)=>{
				return(
					<Table.HeaderCell key={index} textAlign="center">{option.text}</Table.HeaderCell>
				)	
				})}
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
			<a href={"/user"}><Button content="Back" size="large" color="red"/><br/></a>
    </div>
    );
   }
}

export default View;