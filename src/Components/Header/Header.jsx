import React from "react";
import { withRouter, Link } from "react-router-dom";
import castle from '../../castle-white.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import menu from '../../menu.svg'

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			anchoreEl: null
		}
	}
	isLoggedIn = () => {
		return localStorage.getItem("tokan") == null;
	}

  handleClick = event => {
		this.setState({anchorEl: event.currentTarget})
  };

  handleClose = () => {
    this.setState({anchorEl:null})
	};
	
	deleteStorege = (e) => {
		e.preventDefault();
		localStorage.clear();
		this.props.history.push("/");
		this.handleClose()
	}
	render() {
		return (
			<div className="App-Header">
				<Link to="/mysite"  className="site-name"><img src={castle} alt="logo" className="logo" /> My Website</Link>
				<div className="collapsenavigation">
					{this.isLoggedIn() ?  (
						<div className="navigation">
							<div className="navigation-right"><Link to="/about">About</Link></div>
							<div className="navigation-right"><Link to="/signup">Sign up</Link></div>
							<div className="navigation-right btnlogout"><Link to="/">Sign In</Link></div>
						</div>
					) : (
							<div className="navigation raw">
								<div className="navigation-right"><Link to="/about">About</Link></div>
								<div className="navigation-right"><Link to="/post">Dashboard</Link></div>
								<div className="navigation-right btnlogout" onClick={this.deleteStorege}>Sign Out</div>
							</div>
						)}
				</div>
				
				<div className="float-right collapsemenu">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          <img src={menu} alt="" style={{width:"30px"}}/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
					{this.isLoggedIn() ? (
						<div>
							<MenuItem onClick={this.handleClose}><Link to="/about">About</Link></MenuItem>
							<MenuItem onClick={this.handleClose}><Link to="/signup">Sign Up</Link></MenuItem>
							<MenuItem onClick={this.handleClose}><Link to="/">Sign In</Link></MenuItem>
						</div>
						
					) : (
						<div>
							<MenuItem onClick={this.handleClose}><Link to="/about">About</Link></MenuItem>
							<MenuItem onClick={this.handleClose}><Link to="/post">Dashboard</Link></MenuItem>
							<MenuItem onClick={this.deleteStorege}>Sign Out</MenuItem>
						</div>
						
					)}
          
        </Menu>
      </div>
			
			</div>
		);
	}
}
export default withRouter(Header);