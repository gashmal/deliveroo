import React from "react";

class Description extends React.Component {
	render() {
		return <p className="description">{this.props.text}</p>;
	}
}

export default Description;
