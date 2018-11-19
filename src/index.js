import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StripeProvider } from "react-stripe-elements";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(
	<StripeProvider apiKey="pk_test_gVEkkG85BVluadp5yXofc0nc">
		<App />
	</StripeProvider>,
	document.getElementById("root")
);
serviceWorker.register();
