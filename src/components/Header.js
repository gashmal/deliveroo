import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="container">
					<Link to="/">
						<Logo />
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;
