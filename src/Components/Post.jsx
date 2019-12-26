import React from "react";
import axios from "axios";
import { DataCard } from "./DataCard";

class Post extends React.Component {
	state = {
			persons: []
	}
	componentWillMount() {
			if (localStorage.getItem("tokan")) {
				return true;
			}
			else {
				console.log(this.props)
			}
	}
	componentDidMount() {
			axios.get(`https://jsonplaceholder.typicode.com/posts`)
					.then(res => {
							const persons = res.data;
							this.setState({ persons });
					})
	}
	render() {
		return (
			<div className="persons">
				 {this.state.persons.map((person) => <div key={person.id}><DataCard data={person} props={this.props} /></div>)}
			</div>
		);
	}
}
export default Post;