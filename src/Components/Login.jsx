import React from 'react';
import { withRouter } from 'react-router-dom'
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				email: "",
				password: "",
		}
	}
	componentWillMount() {
		if(localStorage.getItem("Email")){
			console.log("this is log")
			this.props.history.push('/mysite')
		}
	}
	changeHandler = (event) => {
		let array = event.target.name;
		let val = event.target.value;
		this.setState({ [array]: val })
	}
	submitHandler = (event) => {
		event.preventDefault();
		localStorage.setItem("Email", "abc@gmail.com"); //set email id : abc@gmail.com
		localStorage.setItem("Password", "123"); // set password : 123
		let email = this.state.email;
		let pass = this.state.password;
		if (localStorage.getItem("Email") === email && localStorage.getItem("Password") === pass) {
				this.props.history.push("/post");
		}
		else {
				alert('Enter Valid Input');
		}
	}
	render() {
		return (
			<div className="App-Container">
				<form onSubmit={this.submitHandler}>
					<h1 className="login-heading">Login </h1>
					<div className="form">
						<div className="form-group">
							<label>Enter Your Email ID: </label>
							<div><input type="email" className="form-control" name="email" onChange={this.changeHandler} /></div>
						</div>
						<div className="form-group">
							<label>Enter Your Password: </label>
							<div><input type="password" className="form-control" name="password" onChange={this.changeHandler} /></div>
						</div>
						<div>
							<input type="submit" className="submitbtn btn btn-primary" value="Login" />
						</div>
					</div>
						
				</form>
			</div>
		);
	}
}
export default withRouter(Login);