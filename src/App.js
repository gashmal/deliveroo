import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import "./Animation.css";
import Menu from "./components/Menu";
import "./App.css";
import Header from "./components/Header";
import LetThemPay from "./components/LetThemPay";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />

					<Route exact path="/" component={Home} />
					<Route exact path="/Menu" component={Menu} />
					<Route exact path="/LetThemPay" component={LetThemPay} />
				</div>
			</Router>
		);
	}
}

export default App;
