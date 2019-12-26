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
			if(value.email === this.state.email){
				if(value.password === this.state.password){
					this.props.history.push("/post");
					localStorage.setItem("tokan", JSON.stringify(value) )
				}
				else{
					console.log("password is incorrect")
				}
			}
			return null
		})
		if(localStorage.getItem("tokan")){
			console.log("successfull")
		}
		else{
			alert("Please register your email id")
			this.props.history.push("/signup");
		}
	}
	render() {
		return (
			<div className="App-Container">
				<form onSubmit={this.submitHandler}>
					<div className="text-center my-3 h1">Login</div>
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