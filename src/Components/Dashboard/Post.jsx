import React from "react";
import axios from "axios";
import { DataCard } from "./DataCard";
import { withRouter } from 'react-router-dom'
import tenor from '../../tenor.gif'

class Post extends React.Component {
	state = {
			persons: [],
			loading: true
	}
	componentWillMount() {
			if (localStorage.getItem("tokan")) {
				return true;
			}
			else {
				this.props.history.push('/')
			}
	}
	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
			.then(res => {
					const persons = res.data;
					this.setState({ persons, loading:false });
			}).catch(errors => console.log(errors))
	}
	render() {
		return (
			<div className="persons App-Container">
				{this.state.loading ? <div className="text-center"><img src={tenor} alt="loading"  /></div> : (<div>{this.state.persons.map((person) => <div key={person.id}><DataCard data={person} props={this.props} /></div>)}</div>)}
			</div>
		);
	}
}
export default withRouter(Post);