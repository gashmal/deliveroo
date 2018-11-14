import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Home} />
				</div>
			</Router>
		);
	}
}

export default App;
