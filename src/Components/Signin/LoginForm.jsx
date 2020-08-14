import React from 'react';
// import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


const LoginForm = ({ submitHandler, changeHandler }) => {
		return (
			<div className="App-Container">
				<form onSubmit={submitHandler}>
					<div className="text-center my-3 h1">SIGN IN</div>
					<hr style={{borderWidth:"10px", width:"10%"}} />
					<div className="link">
							<span style={{textDecoration:"none"}}>Not a member yet?</span> <Link to='/signup'>Sign Up here</Link>
					</div>
					<div className="form">
						<div className="form-group">
							<label>E-mail </label>
							<div><input 
											type="email"
											className="rounded-pill form-control" 
											name="email" 
											onChange={changeHandler} 
											placeholder="Enter your Email Id"
											/></div>
						</div>
						<div className="form-group">
							<label>Password </label>
							<div><input 
											type="password" 
											className="rounded-pill form-control" 
											name="password" 
											onChange={changeHandler}
											placeholder="Enter your password" 
											/></div>
						</div>
						<div className="text-center">
							<input type="submit" className="rounded-pill submitbtn btn btn-primary form-control" value="Login" />
						</div>
						<div className="text-center my-3 text-decoration-underline">
								<Link to="/signup">Forgot password?</Link>
						</div>
						
					</div>
						
				</form>
			</div>
		);
}
export default LoginForm;