import React from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import TheMenu from "./TheMenu";

class Menu extends React.Component {
	state = {
		WhatsOnTheMenu: {},
		restau: {}
	};

	componentDidMount() {
		console.log("Did Mount");
		axios.get("https://deliveroo-api.now.sh/menu").then(response => {
			this.setState({
				WhatsOnTheMenu: response.data.menu,
				restau: response.data.restaurant
			});
		});
	}

	render() {
		return (
			<div>
				<Restaurant resto={this.state.restau} />
				<TheMenu menu={this.state.WhatsOnTheMenu} />
			</div>
		);
	}
}

export default Menu;
