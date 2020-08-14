import React from "react";
import axios from "axios";
// import { DataCard } from "./DataCard";
import { withRouter } from 'react-router-dom'
// import tenor from '../../tenor.gif'

class Post extends React.Component {
	state = {
			persons: null,
			loading: true,
			errors: ""
	}
	
	componentDidMount() {
		axios.get(`http://93d9b3ba6212.ngrok.io/employee-service/all-manager-detail/2627`, {
			headers : {
				"Authorization": "Bearer " + localStorage.getItem("react-token"),
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then(res => {
					if(res.data){
						const persons = res.data.data;
						this.setState({ persons, loading:false });
					}
			}).catch(errors => {
				if(errors){
					this.setState({ errors: "forbidden status code 403"});
				}
			})
	}
	render() {
		return (
			<div className="persons App-Container">
				{console.log(this.state.persons)}
				<ul>
						{this.state.persons && this.state.persons &&  this.state.persons.managersList.map(value => <li key={value.employeeId}>{value.empName}</li>)}
				</ul>
					{this.state.errors}
			</div>
		);
	}
}
export default withRouter(Post);