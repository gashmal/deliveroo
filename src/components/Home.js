import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Link to="/"> HOME </Link> <br />
				<Link to="/menu"> MENU </Link>
			</div>
		);
	}
}

export default Home;
