import React from "react";
import Title from "./Title";
import Description from "./Description";
import Cover from "./Cover";
import Price from "./Price";
import Popular from "./Popular";

class Card extends React.Component {
	render() {
		return (
			<div
				onClick={() => {
					this.props.handleClick();
				}}
				className="flex-row half white-back"
			>
				<div className="left-col">
					<Title text={this.props.title} />
					<Description text={this.props.description} />
					<Price price={this.props.price} />
					<Popular pop={this.props.popular} />
				</div>
				<div className="right-col">
					<Cover url={this.props.url} alt={this.props.title} />
				</div>
			</div>
		);
	}
}

export default Card;
