import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import Menu from "./components/Menu";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />

					<Route exact path="/" component={Home} />
					<Route exact path="/Menu" component={Menu} />
				</div>
			</Router>
		);
	}
}

export default App;
