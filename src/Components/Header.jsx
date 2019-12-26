import React from "react";
import { withRouter, Link } from "react-router-dom";
class Header extends React.Component {
	isLoggedIn = () => {
		return localStorage.getItem("tokan") == null;
	}
	deleteStorege = (e) => {
		e.preventDefault();
		localStorage.clear();
		this.props.history.push("/");
	}
	render() {
		return (
			<div className="App-Header">
				<Link to="/mysite"  className="site-name"><h1> My Website</h1></Link>
				{this.isLoggedIn() ?  (
					<div className="navigation">
						<Link to="/about">About</Link>
						<Link to="/signup">Sign up</Link>
						<Link to="/">Log In</Link>
					</div>
				) : (
						<div className="navigation">
							<div className="navigation-right"><Link to="/about">About</Link></div>
							<div className="navigation-right"><Link to="/dashboard">Dashboard</Link></div>
							<div className="navigation-right btnlogout" onClick={this.deleteStorege}>Log Out</div>
						</div>
					)}
			</div>
		);
	}
}
export default withRouter(Header);