import React from "react";

class Cover extends React.Component {
	render() {
		if (this.props.url !== "") {
			return (
				<img className="cover" src={this.props.url} alt={this.props.alt} />
			);
		} else {
			return null;
		}
	}
}

export default Cover;
