import React from "react";

class Price extends React.Component {
	render() {
		return <span>{this.props.price} € </span>;
	}
}

export default Price;
