import React from 'react'
import LoginForm from './LoginForm'
import Axios from 'axios'
import cookie from 'react-cookies'

class Login extends React.Component{
  constructor(props){
		super(props);
    this.state = {
      data: [],
      email : "",
      password: ""
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
					cookie.save('userId', "asdsadasdasdasdasdasdsadasdsa", {
						path: '/'
					})
					this.props.history.push("/post");
					localStorage.setItem("token", JSON.stringify(value) )
					// this.props.cookies.set('name', JSON.stringify(value) , {domain: "http://localhost:3000/"});
				}
				else{
          alert("password is incorrect")
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
  
  render(){
    return <LoginForm submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
  }
}

export default Login;