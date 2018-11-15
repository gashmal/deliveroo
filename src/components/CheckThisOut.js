import React from "react";

class CheckThisOut extends React.Component {
	render() {
		const CheckYoSelf = [];

		for (let i = 0; i < this.props.cart.length; i++) {
			CheckYoSelf.push(
				<li className="flex-row">
					<div>
						<button
							onClick={() => {
								this.props.onDecrement(this.props.cart[i].titre);
							}}
						>
							-
						</button>
						<span>{this.props.cart[i].quantity}</span>
						<button
							onClick={() => {
								this.props.onIncrement(this.props.cart[i].titre);
							}}
						>
							+
						</button>
					</div>
					<div>{this.props.cart[i].titre}</div>
					<div>{this.props.cart[i].price * this.props.cart[i].quantity}</div>
				</li>
			);
		}

		return (
			<div className="white-back check">
				<button>Valider mon panier</button>
				<div>
					<ul>{CheckYoSelf}</ul>
				</div>
				<br />
				<div>
					<p>Sous-total</p>
					<p>Frais de livraison</p>
				</div>
				<div>
					<h3>Total</h3>
				</div>
			</div>
		);
	}
}

export default CheckThisOut;
