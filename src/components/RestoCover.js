import React from "react";

class RestoCover extends React.Component {
	render() {
		if (this.props.url !== "") {
			return (
				<img className="RestoCover" src={this.props.url} alt={this.props.alt} />
			);
		} else {
			return null;
		}
	}
}

export default RestoCover;
