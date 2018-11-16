import React from "react";
import RestoCard from "./RestoCard";

class Restaurant extends React.Component {
	render() {
		return (
			<div className="container taille">
				<RestoCard
					title={this.props.resto.name}
					description={this.props.resto.description}
					url={this.props.resto.picture}
				/>{" "}
			</div>
		);
	}
}

export default Restaurant;
