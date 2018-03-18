import React, { Component } from 'react';
import {Button,Input,Table,Form} from 'semantic-ui-react';

const autoBind = require('auto-bind');

const initialState  = {
            course_no:"",
            student_no:"",
            last_name:"",
            first_name:"",
            college:"",
            sem_year:"",
            grade:"",
            instructor:"",
            remove_date:"",
            remarks:"",
            dataset:[],
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
            ]
        }

class Add extends Component {

    constructor(props){
        super(props)
        this.state = {
            course_no:"",
            student_no:"",
            last_name:"",
            first_name:"",
            college:"",
            sem_year:"",
            grade:"",
            instructor:"",
            remove_date:"",
            remarks:"",
            dataset:[],
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
            ]
        }
        autoBind(this);
    }

    handleCourseNo(e){this.setState({course_no:e.target.value})}

    handleStudentNo(e){this.setState({student_no:e.target.value})}

    handleLastName(e){this.setState({last_name:e.target.value})}

    handleFirstName(e){this.setState({first_name:e.target.value})}

    handleCollege(e){this.setState({college:e.target.value})}

    handleSemYear(e){this.setState({sem_year:e.target.value})}

    handleGrade(e){this.setState({grade:e.target.value})}

    handleInstructor(e){this.setState({instructor:e.target.value})}

    handleRemoveDate(e){this.setState({remove_date:e.target.value})}

    handleRemarks(e){this.setState({remarks:e.target.value})}

    reset(){
        initialState.course_no = this.state.course_no
        initialState.college = this.state.college
        initialState.remove_date = this.state.remove_date
        initialState.grade = "4.0-"
        initialState.dataset = this.state.dataset
        this.setState(initialState)
    }

    handleInsert(e){
        if(this.state.course_no !== "" && this.state.student_no !== "" && this.state.last_name !== "" && this.state.first_name !== "" && this.state.college !== "" && this.state.sem_year !== "" && this.state.grade !== "" && this.state.instructor !== "" && this.state.remove_date && this.state.remarks !== ""){
            const data = {
                course_no:this.state.course_no,
                student_no:this.state.student_no,
                last_name:this.state.last_name,
                first_name:this.state.first_name,
                college:this.state.college,
                sem_year:this.state.sem_year,
                grade:this.state.grade,
                instructor:this.state.instructor,
                remove_date:this.state.remove_date,
                remarks:this.state.remarks
            }

        this.state.dataset.push(data)
        this.reset()
        this.forceUpdate()
        }
        else{
            alert("Please specify missing field/s !")
        }
    }

    handleInsertAll(){
        var dataset = this.state.dataset
        if(dataset[0] !== undefined){
            dataset.forEach(function(item,index,array) {
                fetch(`http://`+window.location.hostname+`:3001/insert?state=${encodeURIComponent(JSON.stringify(item))}`)
                .then((response) => {return response.json()})
                .then((result) => {})
            });
        alert("Insert Successful!")
        this.setState({dataset:[]})
        }
        else{
            alert("Empty Table!")
        }
    }

  render() {
    return (
    <div>
        <Form onSubmit={this.handleInsert.bind(this)}>
            <Input placeholder="Course no." value={this.state.course_no} onChange={this.handleCourseNo}/>&nbsp;&nbsp;
            <Input placeholder="Student no." value={this.state.student_no} onChange={this.handleStudentNo}/>&nbsp;&nbsp;
            <Input placeholder="Last Name" value={this.state.last_name} onChange={this.handleLastName}/>&nbsp;&nbsp;
            <Input placeholder="First Name" value={this.state.first_name} onChange={this.handleFirstName}/>&nbsp;&nbsp;
            <Input placeholder="College" value={this.state.college} onChange={this.handleCollege}/><br/><br/>
            <Input placeholder="Sem/Year" value={this.state.sem_year} onChange={this.handleSemYear}/>&nbsp;&nbsp;
            <Input placeholder="Remove Date" type="date" value={this.state.remove_date} onChange={this.handleRemoveDate}/>&nbsp;&nbsp;
            <Input placeholder="Grade" value={this.state.grade} onChange={this.handleGrade}/>&nbsp;&nbsp;
            <Input placeholder="Instructor" value={this.state.instructor} onChange={this.handleInstructor}/>&nbsp;&nbsp;
            <Input placeholder="Remarks" value={this.state.remarks} onChange={this.handleRemarks}/><br/><br/>
        	<Button content="Add to Table" type="submit" /><br/>
        </Form>
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
            {this.state.dataset.map((item,index)=>{
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
        </Table><br/><br/>
        <Button content="Insert All" onClick={this.handleInsertAll}/><br/><br/>
        <a href={"/user"}><Button content="Back" size="large" color="red"/><br/></a>
    </div>
    );
   }
}

export default Add;