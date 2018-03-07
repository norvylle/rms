import React, { Component } from 'react';
import {Input,Button} from 'semantic-ui-react';

const autoBind = require('auto-bind');

class Login extends Component{
     constructor(props){
          super(props)
          this.state={
               username:"",
               password:""
          }
          autoBind(this)
     }
     
     handleUsername(e){
          this.setState({username:e.target.value});
     }

     handlePassword(e){
          this.setState({password:e.target.value});
     }

     login(){
          if(this.state.username === "admin" && this.state.password === "admin"){window.location.href = "/user";}
          else{alert("Invalid username/password")}
     }
	render(){
		return(
		<div>
          	<fieldset>
          	<br/><br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;<Input placeholder="Username" size="big" onChange={this.handleUsername}/>&nbsp;&nbsp;&nbsp;&nbsp;
          	<br/><br/><br/>
          	<Input placeholder="Password" size="big" type="password" onChange={this.handlePassword}/>
          	<br/><br/><br/>
          	<Button content="Login" size="big" primary onClick={this.login}/>
          	<br/><br/>
          	</fieldset>
        </div>
		);
	}
}

export default Login;