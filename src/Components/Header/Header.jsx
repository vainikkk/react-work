import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { withRouter, Link } from "react-router-dom";
import castle from '../../Assets/images/castle-white.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import menu from '../../menu.svg'

function PaperComponent(props) {
	return (
		<Draggable cancel={'[class*="MuiDialogContent-root"]'}>
			<Paper {...props} />
		</Draggable>
	);
}

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			anchoreEl: null,
			open: false
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
		// this.props.history.push("/");
		this.handleClose()
	}

	handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	render() {
		return (
			<div className="App-Header">
				<Link to="/mysite"  className="site-name"><img src={castle} alt="logo" className="logo" />Test Keyclock</Link>
				<div className="collapsenavigation">
					{this.isLoggedIn() ?  (
						<div className="navigation">
							<div className="navigation-right"><Link to="/about">ManagerData</Link></div>
							{/* <div className="navigation-right"><Link to="/signup">Sign up</Link></div>
							<div className="navigation-right btnlogout"><Link to="/">Sign In</Link></div> */}
						</div>
					) : (
							<div className="navigation raw">
								<div className="navigation-right"><Link to="/about">About</Link></div>
								<div className="navigation-right"><Link to="/post">Dashboard</Link></div>
								<div className="navigation-right btnlogout" onClick={this.handleClickOpen}>Sign Out</div>
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
				<Dialog
        open={this.state.open}
        onClose={this.handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Logout
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.deleteStorege} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      </div>
			
			</div>
		);
	}
}
export default withRouter(Header);



