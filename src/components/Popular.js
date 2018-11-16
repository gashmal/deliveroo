import React from "react";

class Popular extends React.Component {
	render() {
		if (this.props.pop) {
			return (
				<span className="pop" role="img" aria-label="star">
					⭐ Populaire
				</span>
			);
		} else return null;
	}
}

export default Popular;
