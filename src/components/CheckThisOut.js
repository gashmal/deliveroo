import React from "react";

class CheckThisOut extends React.Component {
	render() {
		const CheckYoSelf = [];
		let SousTotal = 0;
		for (let i = 0; i < this.props.cart.length; i++) {
			SousTotal +=
				Number(this.props.cart[i].price) * Number(this.props.cart[i].quantity);
			CheckYoSelf.push(
				<li className="flex-row between reset fadeInRightBig">
					<div className="flex1">
						<button
							className="plusminus"
							onClick={() => {
								this.props.onDecrement(this.props.cart[i].titre);
							}}
						>
							-
						</button>
						<span className="colorGray">
							{" " + this.props.cart[i].quantity + " "}
						</span>
						<button
							className="plusminus"
							onClick={() => {
								this.props.onIncrement(this.props.cart[i].titre);
							}}
						>
							+
						</button>
					</div>
					<div className="flex3">{this.props.cart[i].titre}</div>
					<div className="flex1 rightOn">
						{(this.props.cart[i].price * this.props.cart[i].quantity).toFixed(
							2
						) + " €"}
					</div>
				</li>
			);
		}

		return (
			<div className="white-back check bounceInUp">
				<button class="panier">Valider mon panier</button>
				<div>
					<ul className="putItOnTheSide bottom">{CheckYoSelf}</ul>
				</div>

				<div className="flex-row between putItOnTheSide">
					<div className="flex1">Sous-total</div> <div className="flex3" />
					<div className="flex1 rightOn">{SousTotal.toFixed(2)} €</div>
				</div>
				<div className="flex-row between putItOnTheSide">
					<div className="flex4">Frais de Livraison</div>

					<div className="flex1 rightOn">2.50 €</div>
				</div>

				<div className="topShadow">
					<h3 className="flex-row between putItOnTheSide ">
						<span className="flex4">Total</span>{" "}
						<span className="flex1 rightOn">
							{(SousTotal + 2.5).toFixed(2)} €
						</span>
					</h3>
				</div>
			</div>
		);
	}
}

export default CheckThisOut;
