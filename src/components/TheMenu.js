import React from "react";
import CheckThisOut from "./CheckThisOut";
import Card from "./Card";
import Title from "./Title";

class TheMenu extends React.Component {
	state = {
		WhatsOnMyCart: []
	};

	componentDidMount() {
		sessionStorage.getItem("savedCart") &&
			this.setState({
				WhatsOnMyCart: JSON.parse(sessionStorage.getItem("savedCart"))
			});
	}

	renderCheckout() {
		if (this.state.WhatsOnMyCart.length > 0) {
			return (
				<CheckThisOut
					resto={this.props.resto}
					cart={this.state.WhatsOnMyCart}
					onIncrement={titre => {
						let newCart = [...this.state.WhatsOnMyCart];
						for (let i = 0; i < newCart.length; i++) {
							if (newCart[i].titre === titre) {
								newCart[i].quantity++;
								this.setState({
									WhatsOnMyCart: newCart
								});
							}
						}
					}}
					onDecrement={titre => {
						let newCart = [...this.state.WhatsOnMyCart];
						for (let i = 0; i < newCart.length; i++) {
							if (newCart[i].titre === titre && newCart[i].quantity > 0) {
								newCart[i].quantity--;
								if (newCart[i].quantity === 0) {
									newCart.splice(i, 1);
								}
								this.setState({
									WhatsOnMyCart: newCart
								});
							}
						}
					}}
				/>
			);
		} else {
			return null;
		}
	}

	render() {
		const menuItems = [];

		for (let i = 0; i < Object.keys(this.props.menu).length; i++) {
			let key = Object.keys(this.props.menu)[i];
			if (this.props.menu[key].length > 0) {
				menuItems.push(
					<Title key={"title" + i} text={Object.keys(this.props.menu)[i]} />
				);
				const menuBayes = [];
				for (let j = 0; j < this.props.menu[key].length; j++) {
					let itemArray = Object.entries(this.props.menu[key][j]);
					let itemtitle = "";
					let itemdescription = "";
					let itemprice = "";
					let itempicture = "";
					let itempopular = false;
					for (let k = 0; k < itemArray.length; k++) {
						if (itemArray[k][0] === "title") {
							itemtitle = itemArray[k][1];
						} else if (itemArray[k][0] === "description") {
							itemdescription = itemArray[k][1];
						} else if (itemArray[k][0] === "price") {
							itemprice = itemArray[k][1];
						} else if (itemArray[k][0] === "picture") {
							itempicture = itemArray[k][1];
						} else if (itemArray[k][0] === "popular") {
							itempopular = itemArray[k][1];
						}
					}
					menuBayes.push(
						<Card
							key={j}
							handleClick={() => {
								let newCart = [...this.state.WhatsOnMyCart];
								let ilEstAl = false;
								for (let i = 0; i < newCart.length; i++) {
									if (newCart[i].titre === itemtitle) {
										newCart[i].quantity++;
										ilEstAl = true;
										this.setState({
											WhatsOnMyCart: newCart
										});
									}
								}
								if (!ilEstAl) {
									newCart.push({
										quantity: 1,
										titre: itemtitle,
										price: itemprice
									});
									this.setState({
										WhatsOnMyCart: newCart
									});
								}
							}}
							title={itemtitle}
							description={itemdescription}
							url={itempicture}
							price={itemprice}
							popular={itempopular}
						/>
					);
				}
				menuItems.push(
					<div key={"truc" + i} className="flex-row">
						{menuBayes}
					</div>
				);
			}
		}

		return (
			<div className="gray-back">
				<div className="container">
					<div className="flex-row">
						<div className="left-col">{menuItems}</div>
						<div className="right-col">{this.renderCheckout()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TheMenu;
