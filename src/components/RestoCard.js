import React from "react";
import Title from "./Title";
import Description from "./Description";
import Cover from "./Cover";

class RestoCard extends React.Component {
	render() {
		return (
			<div className="flex-row white-back">
				<div className="left-col">
					<Title text={this.props.title} />
					<Description text={this.props.description} />
				</div>
				<div className="right-col">
					<Cover url={this.props.url} alt={this.props.title} />
				</div>
			</div>
		);
	}
}

export default RestoCard;
