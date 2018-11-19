import React from "react";
import StaticCart from "./StaticCart";
import Form from "./Form";
import { Elements } from "react-stripe-elements";

class LetThemPay extends React.Component {
	render() {
		console.log(this.props.location.cart);
		return (
			<div className="gray-back allPage">
				<div className="container">
					<div className="flex-row between noTop">
						<div className="flex2 lilMargin">
							<Elements>
								<Form
									resto={this.props.location.resto}
									price={this.props.location.price}
								/>
							</Elements>
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
