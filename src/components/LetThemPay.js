import React from "react";
import StaticCart from "./StaticCart";
import Form from "./Form";

class LetThemPay extends React.Component {
	render() {
		console.log(this.props.location.cart);
		return (
			<div className="gray-back allPage">
				<div className="container">
					<div className="flex-row between noTop">
						<div className="flex2 lilMargin">
							<Form resto={this.props.location.resto} />
						</div>
						<div className="flex1 lilMargin">
							<StaticCart cart={this.props.location.cart} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LetThemPay;
