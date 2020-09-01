import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import LoggedInPage from "./pages/loggenIn";
import LoggedOutPage from "./pages/loggedOut";

function App() {
	return (
		<Auth0Provider
			clientId="Evxik4rJJ48OGbeF3YAjlvTW21UpyxcN"
			domain="https://dev-i7afx3za.au.auth0.com/"
			redirectUri="https://learn-auth0.vercel.app/logged-in"
		>
			<Router>
				<div className="App">
					<Route path="/" exact component={LoggedOutPage} />
					<Route path="/logged-in" exact component={LoggedInPage} />
				</div>
			</Router>
		</Auth0Provider>
	);
}

export default App;
