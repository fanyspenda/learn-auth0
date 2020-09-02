import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedIn: React.FunctionComponent = () => {
	const history = useHistory();
	const { logout, user, isAuthenticated } = useAuth0();
	const [userData, setUserData] = useState(user);

	const authChecker = () => {
		if (isAuthenticated) {
			return <h2>you are authenticated</h2>;
		} else {
			history.push("/");
		}
	};
	return (
		<>
			<h1>This page is only showed to Logged In User</h1>
			{authChecker()}
			<button onClick={() => logout()}>Log Out</button>
		</>
	);
};

export default LoggedIn;
