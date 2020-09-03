import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedIn: React.FunctionComponent = () => {
	const history = useHistory();
	const {
		logout,
		user,
		isAuthenticated,
		getAccessTokenSilently,
	} = useAuth0();
	const [userData, setUserData] = useState(user);

	return isAuthenticated ? (
		<>
			<h1>This page is only showed to Logged In User</h1>
			<p>your token is {getAccessTokenSilently()}</p>
			<button onClick={() => logout()}>Log Out</button>
		</>
	) : (
		<h1>Authenticating...</h1>
	);
};

export default LoggedIn;
