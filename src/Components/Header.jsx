import React from "react";
import { withRouter, Link } from "react-router-dom";
import castle from '../castle-white.png'

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
				<Link to="/mysite"  className="site-name"><img src={castle} alt="logo" className="logo" /> My Website</Link>
				{this.isLoggedIn() ?  (
					<div className="navigation">
						<div className="navigation-right"><Link to="/about">About</Link></div>
						<div className="navigation-right"><Link to="/signup">Sign up</Link></div>
						<div className="navigation-right btnlogout"><Link to="/">Log In</Link></div>
					</div>
				) : (
						<div className="navigation">
							<div className="navigation-right"><Link to="/about">About</Link></div>
							<div className="navigation-right"><Link to="/post">Dashboard</Link></div>
							<div className="navigation-right btnlogout" onClick={this.deleteStorege}>Log Out</div>
						</div>
					)}
			</div>
		);
	}
}
export default withRouter(Header);