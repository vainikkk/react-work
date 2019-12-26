import React from 'react';
import { withRouter } from 'react-router-dom'
import Axios from 'axios';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				data: [],
				email: "",
				password: "",
				confirm: false,
		}
	}
	// componentWillMount() {
	// 	if(localStorage.getItem("Email")){
	// 		console.log("this is log")
	// 		this.props.history.push('/mysite')
	// 	}
	// }
	componentDidMount(){
		Axios.get('http://5dfb61d30301690014b8fa75.mockapi.io/sigup').then((response)=>{
			this.setState({data: response.data})
		})
	}
	changeHandler = (event) => {
		let array = event.target.name;
		let val = event.target.value;
		this.setState({ [array]: val })
	}

	resetform = () => {
		console.log("reset form function")
	}
	submitHandler = (event) => {
		event.preventDefault();
		this.state.data.map((value)=>{
			if(value.email === this.state.email && value.password === this.state.password){
				this.props.history.push("/post");
				localStorage.setItem("tokan", value.email )
				this.setState({confirm: true})
			}
		})
		// localStorage.setItem("Email", "abc@gmail.com"); //set email id : abc@gmail.com
		// localStorage.setItem("Password", "123"); // set password : 123
		// let email = this.state.email;
		// let pass = this.state.password;
		// if (localStorage.getItem("Email") === email && localStorage.getItem("Password") === pass) {
		// 		this.props.history.push("/post");
		// }
		// else {
		// 		alert('Enter Valid Input');
		// }
	}
	render() {
		return (
			<div className="App-Container">
				<form onSubmit={this.submitHandler}>
					<h1 className="login-heading">Login </h1>
					{console.log(this.state.data)}
					<div className="form">
						<div className="form-group">
							<label>Enter Your Email ID: </label>
							<div><input type="email" className="form-control" name="email" onChange={this.changeHandler} /></div>
						</div>
						<div className="form-group">
							<label>Enter Your Password: </label>
							<div><input type="password" className="form-control" name="password" onChange={this.changeHandler} /></div>
						</div>
						<div className="text-center">
							<input type="submit" className="submitbtn btn btn-primary" value="Login" />
						</div>
					</div>
						
				</form>
			</div>
		);
	}
}
export default withRouter(Login);