import React from "react";

class StaticCart extends React.Component {
	render() {
		const CheckYoSelf = [];
		let SousTotal = 0;
		if (this.props.cart === undefined) {
			return null;
		}
		for (let i = 0; i < this.props.cart.length; i++) {
			SousTotal +=
				Number(this.props.cart[i].price) * Number(this.props.cart[i].quantity);
			CheckYoSelf.push(
				<li className="flex-row between reset fadeInRightBig" key={i}>
					<div className="flex1">
						<span className="colorGray">
							{"x" + this.props.cart[i].quantity + " "}
						</span>
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
				<button className="panier nohoover">Mon panier</button>

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

export default StaticCart;
