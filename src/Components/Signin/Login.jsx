import React from 'react';
import { withRouter } from 'react-router-dom'
import Axios from 'axios';
import { Link } from 'react-router-dom'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				data: [],
				email: "",
				password: "",
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
					<div className="text-center my-3 h1">SIGN IN</div>
					<hr style={{borderWidth:"10px", width:"10%"}} />
					<div className="link">
							<span style={{textDecoration:"none"}}>Not a member yet?</span> <Link to='/signup'>Sign Up here</Link>
					</div>
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
							<input type="submit" className="submitbtn btn btn-primary form-control" value="Login" />
						</div>
						<div className="text-center my-3 text-decoration-underline">
								<Link to="/signup">Forgot password?</Link>
						</div>
						
					</div>
						
				</form>
			</div>
		);
	}
}
export default withRouter(Login);